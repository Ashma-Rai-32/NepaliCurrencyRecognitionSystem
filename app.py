from flask import Flask, render_template, request, jsonify
import tensorflow as tf
from flask_cors import CORS
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
CORS(app)
model = tf.keras.models.load_model("final.h5")


def preProcessing(img):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  # invalid num of channel
    img = cv2.equalizeHist(img)
    img = img / 255
    return img


# def prepare(filepath):
#     IMG_SIZE = 128
#     # read in the image, convert to grayscale
#     img_array = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
#     # resize image to match model's expected sizing
#     new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
#     # return the image with shaping that TF wants.
#     return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 1)


@app.route("/", methods=["GET"])
def hello_world():
    return render_template("index.html")


@app.route("/", methods=["POST"])
def predictfn():
    if "imagefile" not in request.files:
        return "No file part", 400  # Return an error if image file isn't in request

    imagefile = request.files["imagefile"]

    if imagefile.filename == "":
        return "No selected file", 400  # Return an error if no file is selected

    img = Image.open(imagefile)

    img = img.resize((128, 128))
    img_array = np.array(img)

    testimages = [img_array]
    testimages = np.array(testimages)

    testimagesresult = model.predict(testimages)

    label = np.argmax(testimagesresult)
    confidenceResult = round(np.amax(testimagesresult) * 100, 2)

    # encode the image to base64 to return it
    data = io.BytesIO()
    img.save(data, "JPEG")
    encoded_img_data = base64.b64encode(data.getvalue())

    actualValue = ["50", "5", "500", "100", "10", "1000", "20"]
    audioForActualValue = [
        "fifty.mp3",
        "five.mp3",
        "fivehundred.mp3",
        "hundred.mp3",
        "ten.mp3",
        "thousand.mp3",
        "twenty.mp3",
    ]

    return jsonify(
        {
            "prediction": actualValue[label],
            "confidence": confidenceResult,
            "filename": encoded_img_data.decode("UTF-8"),
            "playback": audioForActualValue[label],
        }
    )


if __name__ == "__main__":
    app.run(port=5500, debug=True)
