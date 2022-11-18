FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);

FilePond.setOptions({
  //   styleItemPanelAspectRatio: 50 / 30,
  imageResizeTargetWidth: 30,
  imageResizeTargetHeight: 50,
});

FilePond.parse(document.body);
