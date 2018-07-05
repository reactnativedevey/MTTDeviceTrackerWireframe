(function(window, undefined) {
  var dictionary = {
    "74898225-6245-4597-9aad-4601aae1a945": "devicelist",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "64fc1b27-7833-48f8-ab0e-351f46043c6e": "dashboard",
    "ba3ac059-9e9d-40fc-a323-241d91586d68": "trasactions",
    "4490a05f-b451-4837-ade1-b8e02990a1c3": "scannedimage",
    "b067ed36-d418-4ee9-b8ec-3e8a8a7a10ed": "scanner",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);