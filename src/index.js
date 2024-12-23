const { DocumentDetector } = window["@combateafraude/document-detector"];

const options = {
  token: "YOUR_MOBILE_TOKEN",
  language: "pt_BR",
  blockExecutionOnDesktops: false,
  enableVisibilityChangeSecurity: false,
  analytics: {
    enabled: true,
    trackingId: "My Tracking ID",
    trackingInfo: {
      myProp: "My Tracking Info",
    },
    enableDebugMode: false,
  },
  appearance: {
    general: {
      fontFamily: "arial",
      closeButtonIconColor: "#FFFFFF",
    },
    capture: {
      captureButtonIconSize: "100%",
      captureButtonColor: "#FFFFFF",
      cameraSwitchButtonIconSize: "4vh",
      cameraSwitchButtonIconColor: "#FFFFFF",
      hideCameraSwitchButton: false,
      hideCaptureTitle: false,
    },
    "upload.backgroundColor": "#BDBDBD",
    "upload.card.backgroundColor": "#FFFFFF",
    "upload.startScreen.title.color": "#323232",
    "upload.startScreen.details.color": "#828282",
    "upload.startScreen.allowButton.backgroundColor": "#323232",
    "upload.startScreen.allowButton.label.color": "#FFFFFF",
    "upload.loadingScreen.icon.color": "#000000",
    "upload.loadingScreen.text.color": "#323232",
    "upload.failureScreen.icon.color": "#E21B45",
    "upload.failureScreen.icon.shadowColor": "#FFE4E6",
    "upload.failureScreen.title.color": "#323232",
    "upload.failureScreen.details.color": "#828282",
    "upload.failureScreen.retryButton.backgroundColor": "#E21B45",
    "upload.failureScreen.retryButton.label.color": "#FFFFFF",
    "upload.successScreen.icon.color": "#0BAA43",
    "upload.successScreen.icon.shadowColor": "#DAFEE5",
    "upload.successScreen.text.color": "#0BAA43",
  },
};

const documentDetector = new DocumentDetector(options);

// This method is optional, but it can significantly improve the SDK's
// loading experience. We recommend using it as early as possible in your
// workflow, even before reaching the SDK's loading screen. However, if it's
// not feasible or doesn't align with the nature of your flow when
// integrating the SDK, the initialize method will handle everything
// necessary to ensure the SDK functions properly without the need for this method.
await documentDetector.loadAiModel();

// Asks the user to allow camera via the browser being used
// It is important to call this method before initializing the SDK
// A good practice here is to give some feedback to the user that the camera is being requested or that the camera is already allowed
// This method returns a promise that resolves when the user allows the camera, or if the camera is already allowed
await documentDetector.initPermissions();

// Now that the camera is allowed, we can initialize the SDK
await documentDetector.initialize();

// Now that the SDK is initialized, we can start the capture process
// This is the moment that the SDK will be displayed to the user via a modal
// The capture process will start and the user will be able to capture the document
// The capture method returns a promise that resolves when the capture process is finished successfully

documentDetector.addEventListener("front_capture_started", () => {
  console.debug("Front capture event triggered");
});

const frontCaptureResult = await documentDetector.capture({
  expectedDocument: "cnh_front",
  mode: "automatic",
  automaticCaptureMaxDuration: 30,
  personID: "my-person-id",
});

documentDetector.addEventListener("back_capture_started", () => {
  console.debug("Back capture event triggered");
});

const backCaptureResult = await documentDetector.capture({
  expectedDocument: "cnh_back",
  mode: "automatic",
  automaticCaptureMaxDuration: 30,
  personID: "my-person-id",
});

// Now we can close the SDK to stop displaying it
await documentDetector.close();

// And dispose the SDK to free up resources
await documentDetector.dispose();
