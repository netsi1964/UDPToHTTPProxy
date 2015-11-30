var dataMap = ["id", "country", "city", "type", "sim", "lat", "long", "alt", "color"];
module.exports = function(simulatorData) {
  function createTemplate(dataformat) {
    var result = "";
    dataformat.map(function(param) {
      result += ((result !== "") ? "," : "") + "\"" + param + "\":\"%data%\"";
    });
    return result;
  }
  var responseTemplate = createTemplate(dataMap);

  // var exampleData = "1,Denmark,Aarhus,F-35,1,56.369814,10.312042,100,100.50.40;2,Denmark,Aarhus,F-35,1,57.369814,10.712042,100,10.150.40";

  function parseSimulatorData(simulatorData, responseTemplate) {
    try {
      var httpResponse = "[";
      var simulators = simulatorData.split(";");

      simulators.map(function(simulator, simNo) {
        var simData = simulator.split(",");
        var i = 0;
        httpResponse += ((simNo > 0) ? "," : "") + "{" + responseTemplate.replace(/%data%/g, function() {
          return simData[i++];
        }) + "}";
      });
      return httpResponse + "]";
    } catch (e) {
      console.log(e.message + ": " + JSON.stringify(simulatorData));
    } finally {

    }
  }
  return (parseSimulatorData(simulatorData, responseTemplate));
};
