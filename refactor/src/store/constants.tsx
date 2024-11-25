const model = {
  siglum: "NCR",
  title: "Nepali Currency Recognition System",
  subtitle: {
    p1: "Introducing our Nepalese Currency Recognition System: a handy tool that makes identifying and sorting Nepalese banknotes a breeze. Effortlessly recognize different denominations from images.",
  },

  vision: {
    title: "Vision",
    content:
      "As third-year students, our vision for NCR was to combine technology with practical use, showcasing our skills while addressing real-world cash-handling challenges.",
  },
  description: {
    title: "Project Description",
    content:
      "The Nepali Currency Recognition System is a software project that we developed as part of our minor project in our computer science curriculum. Using machine learning techniques and image processing, our system can identify and sort Nepalese banknotes accurately from images. Our goal was to build a user-friendly application that helps individuals and businesses recognize different denominations effortlessly, making cash transactions smoother.",
  },
  keyFeatures: {
    title: "Key Features",
    features: [
      {
        title: "Fast Recognition",
        label: "Fast Recognition",
        description:
          "Our system provides quick identification of banknotes, allowing users to recognize them within seconds, which is especially useful for retail environments.",
      },
      {
        title: "Intuitive Design",
        label: "Intuitive Design",
        description:
          "We designed an easy-to-use interface that requires minimal guidance, ensuring that anyone can use the application regardless of their tech-savviness.",
      },
      {
        title: "Language Options",
        label: "Language Options",
        description:
          "To accommodate various users, our application supports multiple languages, making it accessible to a wider audience.",
      },
      {
        title: "Data Security",
        label: "Data Security",
        description:
          "We implemented basic security features to protect user data and ensure safe transactions, demonstrating our commitment to user privacy.",
      },
      {
        title: "Learning Algorithms",
        label: "Learning Algorithms",
        description:
          "Our system employs learning algorithms that improve its accuracy over time, making it better with each use as it adapts to different banknote designs.",
      },
    ],
  },

  dataset: {
    body: "The dataset for this project was originally sourced from Kaggle, contributed by Gaurav Neupane, and included a comprehensive selection of images representing various denominations of Indian Rupee notes. After careful inspection, it was observed that the quantity for Rupees 5 notes was inadequate. To address this, our team took a hands-on approach, actively gathering additional images to ensure an equal distribution across all classes. This involved capturing photos of five-rupee notes from different years and angles, with varied backgrounds, to enhance the dataset's diversity and improve the robustness of the model. In total, the dataset comprised 17,229 images, which were further divided into training, validation, and testing subsets. Specifically, 10,609 images were allocated for training, 3,537 for validation, and 3,334 for testing, ensuring a well-structured split for optimal model development and assessment. Each class—representing denominations such as Rupees 50, 5, 500, 100, 10, 1000, and 20—was balanced with a roughly equal number of images, thereby providing an ideal foundation for classification. This structured and meticulously curated dataset allows our model to accurately distinguish between denominations, even in real-world scenarios with varied backgrounds and orientations.",
  },
  importance: {
    title: "Why This Matters",
    content:
      "In today's fast-paced world, handling cash efficiently is essential, especially in markets and shops. Our project highlights the importance of technology in improving everyday tasks. By implementing the Nepali Currency Recognition System, we aim to reduce human error in cash handling and speed up transactions. This system could potentially help businesses save time and improve customer service.",
  },
  journey: {
    title: "Our Journey",
    content:
      "The journey to develop this project has been both challenging and rewarding. Starting from brainstorming sessions, we dove into researching image processing techniques and machine learning algorithms. After countless hours of coding, testing, and refining, we created a working prototype. We've learned a lot about teamwork, problem-solving, and the technical aspects of software development. This project has not only enhanced our coding skills but also deepened our understanding of real-world applications of technology.",
  },
  report: {
    title: "Full report on NCR Model",
    introduction:
      "We have compiled a detailed report documenting our project's development process, technical specifications, and findings. The report includes insights into our research, the challenges we faced, and how we overcame them.",
    linkText: "View Project Report (PDF)",
  },
  callToAction: {
    title: "Get Involved",
    content:
      "We are excited about the potential of our Nepali Currency Recognition System and would love to hear your thoughts! Whether you're a fellow student, a teacher, or just someone interested in technology, your feedback is invaluable. We hope our project inspires future innovations in cash handling and encourages more students to explore the exciting world of tech!",
  },
  contact: {
    title: "Reach Out",
    content:
      "If you have any questions, feedback, or collaboration ideas, please feel free to contact us at [Your Contact Information]. We're eager to connect with others who share our passion for technology and innovation.",
  },
  classDistribution: {
    caption:
      "To optimize model performance, we rigorously curated the dataset to ensure each denomination was well-represented across diverse conditions, including lighting and backgrounds. This balanced, high-quality dataset minimized bias, enhancing the model's accuracy and adaptability to real-world scenarios where variations in note orientation and condition are common.",
  },
  evaluationModes: [
    { label: "training", value: "training", name: "training" },
    { label: "testing", value: "testing", name: "testing" },
    { label: "validation", value: "validation", name: "validation" },
  ],
  modelVariants: [
    {
      label: "m1",
      shade: "bg-text-muted",
      description:
        "Model 1 was designed using a basic convolutional neural network (CNN) architecture, which included a few convolutional layers followed by max-pooling layers and a fully connected layer. This straightforward design achieved an overall accuracy of 85%. The precision values for different denominations varied, with Rupees 10 at 0.82 and Rupees 50 at 0.91. While this model provided a good starting point, the confusion matrix indicated significant mis-classifications, particularly between Rupees 10 and 5, revealing a need for more sophisticated approaches and data refinement.",
    },
    {
      label: "m2",
      shade: "bg-background",
      description:
        "Built upon the initial architecture by incorporating additional convolutional layers and dropout layers to prevent overfitting. This model also utilized data augmentation techniques, such as rotation and flipping, to enhance the diversity of the training set. M2 achieved an accuracy of 90%, with precision values improving to 0.95 for Rupees 1000 and 0.88 for Rupees 20.  The enhanced architecture allowed for better differentiation between closely related notes, although some challenges remained with lower denominations. The model's improved metrics validated the effectiveness of adding complexity to the architecture while addressing some of the previous model’s limitations.",
    },
    {
      label: "m3",
      shade: "bg-background-light",
      description:
        " Model 3 was the final iteration, featuring a more advanced deep learning architecture, specifically a deeper CNN with residual connections and batch normalization. This model also incorporated extensive data collection efforts to ensure a more robust dataset with diverse images of each denomination. The resulting accuracy reached 95%, with precision for Rupees 50 and 1000 soaring to 0.98 and 0.96, respectively.   The confusion matrix demonstrated substantial improvements in recall, particularly for lower denominations, underscoring the model’s capability to accurately classify all notes. The combination of an optimized architecture and meticulously curated dataset led to the selection of Model 3 as our final model.",
    },
  ],

  confusionMatrix: {
    classes: ["5", "10", "20", "50", "100", "500", "1000"],
    data: [
      [485, 0, 2, 2, 7, 17, 2], // Actual 50
      [0, 485, 0, 0, 0, 0, 16], // Actual 5
      [0, 0, 484, 1, 0, 14, 0], // Actual 500
      [8, 0, 5, 485, 7, 10, 6], // Actual 100
      [2, 7, 17, 49, 348, 20, 2], // Actual 10
      [0, 0, 0, 0, 6, 492, 0], // Actual 1000
      [0, 12, 0, 0, 3, 3, 330], // Actual 20
    ],

    support: [515, 501, 501, 521, 445, 501, 350],
  },

  result: {
    table: {
      columns: [
        {
          key: "class",
          label: "Class",
          sortable: true,
        },
        {
          key: "precision",
          label: "Precision",
          sortable: true,
        },
        {
          key: "recall",
          label: "Recall",
          sortable: true,
        },
        {
          key: "f1Score",
          label: "F1-Score",
          sortable: true,
        },
        {
          key: "support",
          label: "Support",
          sortable: true,
        },
      ],
      data: [
        {
          class: 0,
          precision: 0.98,
          recall: 0.94,
          f1Score: 0.96,
          support: 515,
        },
        {
          class: 1,
          precision: 0.96,
          recall: 0.97,
          f1Score: 0.96,
          support: 501,
        },
        {
          class: 2,
          precision: 0.95,
          recall: 0.97,
          f1Score: 0.96,
          support: 501,
        },
        {
          class: 3,
          precision: 0.89,
          recall: 0.93,
          f1Score: 0.91,
          support: 521,
        },
        {
          class: 4,
          precision: 0.95,
          recall: 0.78,
          f1Score: 0.86,
          support: 445,
        },
        {
          class: 5,
          precision: 0.88,
          recall: 0.98,
          f1Score: 0.93,
          support: 501,
        },
        {
          class: 6,
          precision: 0.93,
          recall: 0.94,
          f1Score: 0.93,
          support: 350,
        },
      ],
    },
  },
};

export { model };
