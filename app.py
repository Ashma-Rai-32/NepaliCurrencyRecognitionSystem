from flask import Flask, render_template, request
import tensorflow as tf
from tensorflow import keras
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
from keras.models import load_model
from keras.preprocessing import image
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
import PIL
from PIL import Image
import cv2
import numpy as np
import os
import io
import base64
from werkzeug.utils import secure_filename

from playsound import playsound


app = Flask(__name__)
model = tf.keras.models.load_model("final.h5")


def preProcessing(img):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  # invalid num of channel
    img = cv2.equalizeHist(img)
    img = img/255
    return img


# def prepare(filepath):
#     IMG_SIZE = 128
#     # read in the image, convert to grayscale
#     img_array = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
#     # resize image to match model's expected sizing
#     new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
#     # return the image with shaping that TF wants.
#     return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 1)


@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')


@app.route('/', methods=["POST"])
def predictfn():
    filename = ''
    imagefile = request.files['imagefile']
    image_path = "./images/"+imagefile.filename
    imagefile.save(image_path)
    filename = secure_filename(imagefile.filename)
    test_path = "./images/"

    img = Image.open(image_path)
    data = io.BytesIO()
    img.save(data, "JPEG")
    encode_img_data = base64.b64encode(data.getvalue())

    testimages = []
    testClassNo = []
    nooftest = len(os.listdir(test_path))
    print(os.listdir(test_path))
    for x in range(0, nooftest):
        myPicList = os.listdir(test_path)
        # print(myPicList)
        for y in myPicList:
            curImg = cv2.imread(test_path+"/"+y)
            # print(curImg)
            curImg = cv2.resize(curImg, (128, 128))
            testimages.append(curImg)
            testClassNo.append(x)
            #print (x)
    print(testimages)
    testimages = np.array(testimages)
    testClassNo = np.array(testClassNo)
    print(testimages.shape)

    testimagesresult = model.predict(testimages)

    print(testimagesresult)
    label = np.argmax(testimagesresult)
    confidenceResult = np.amax(testimagesresult)*100
    confidenceResult = round(confidenceResult, 2)
    print(label)
    #classification = '%s (%.2f%%)' % (label[1], label[2]*100)
    actualValue = ["50", "5", "500", "100", "10", "1000", "20"]
    audioForActualValue = ["fifty.mp3", "five.mp3", "fivehundred.mp3",
                           "hundred.mp3", "ten.mp3", "thousand.mp3", "twenty.mp3"]

    os.remove(image_path)
    print(audioForActualValue[0])

    return render_template('index.html', prediction=actualValue[label], confidence=confidenceResult, filename=encode_img_data.decode("UTF-8"), playback=audioForActualValue[label])


if __name__ == '__main__':
    app.run(port=5500, debug=True)
