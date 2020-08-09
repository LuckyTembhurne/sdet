$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Dataassignment.feature");
formatter.feature({
  "line": 2,
  "name": "Search Google",
  "description": "",
  "id": "search-google",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Need to enter multiple text",
  "description": "",
  "id": "search-google;need-to-enter-multiple-text",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open calculator site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the Title of the Page again",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Age \"\u003cage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Height \"\u003cheight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Weight \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tap on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Capture the BMI Result value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-google;need-to-enter-multiple-text;",
  "rows": [
    {
      "cells": [
        "age",
        "height",
        "weight"
      ],
      "line": 19,
      "id": "search-google;need-to-enter-multiple-text;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 20,
      "id": "search-google;need-to-enter-multiple-text;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 21,
      "id": "search-google;need-to-enter-multiple-text;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 22,
      "id": "search-google;need-to-enter-multiple-text;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 23,
      "id": "search-google;need-to-enter-multiple-text;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 24,
      "id": "search-google;need-to-enter-multiple-text;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Need to enter multiple text",
  "description": "",
  "id": "search-google;need-to-enter-multiple-text;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open calculator site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the Title of the Page again",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Age \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Height \"127\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Weight \"40\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tap on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Capture the BMI Result value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dataassignment.open_calculator_site()"
});
formatter.result({
  "duration": 7360428700,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 16634400,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1940746200,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 7523200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 11
    }
  ],
  "location": "Dataassignment.enter_Age(String)"
});
formatter.result({
  "duration": 209924800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "127",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Height(String)"
});
formatter.result({
  "duration": 142666400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Weight(String)"
});
formatter.result({
  "duration": 206259600,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.tap_on_Calculate_BMI()"
});
formatter.result({
  "duration": 627750800,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.capture_the_BMI_Result_value()"
});
formatter.result({
  "duration": 40964400,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.close_the_browser()"
});
formatter.result({
  "duration": 783181400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Need to enter multiple text",
  "description": "",
  "id": "search-google;need-to-enter-multiple-text;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open calculator site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the Title of the Page again",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Age \"30\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Height \"156\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Weight \"70\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tap on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Capture the BMI Result value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dataassignment.open_calculator_site()"
});
formatter.result({
  "duration": 5565249200,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 11444200,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1545379900,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 6198100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 11
    }
  ],
  "location": "Dataassignment.enter_Age(String)"
});
formatter.result({
  "duration": 161262100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "156",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Height(String)"
});
formatter.result({
  "duration": 141870700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Weight(String)"
});
formatter.result({
  "duration": 144666100,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.tap_on_Calculate_BMI()"
});
formatter.result({
  "duration": 718561600,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.capture_the_BMI_Result_value()"
});
formatter.result({
  "duration": 39342900,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.close_the_browser()"
});
formatter.result({
  "duration": 1290984700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Need to enter multiple text",
  "description": "",
  "id": "search-google;need-to-enter-multiple-text;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open calculator site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the Title of the Page again",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Age \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Height \"152\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Weight \"55\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tap on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Capture the BMI Result value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dataassignment.open_calculator_site()"
});
formatter.result({
  "duration": 5250228600,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 10802400,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1441349000,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 4999500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 11
    }
  ],
  "location": "Dataassignment.enter_Age(String)"
});
formatter.result({
  "duration": 139078200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "152",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Height(String)"
});
formatter.result({
  "duration": 136662200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Weight(String)"
});
formatter.result({
  "duration": 136065300,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.tap_on_Calculate_BMI()"
});
formatter.result({
  "duration": 648390600,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.capture_the_BMI_Result_value()"
});
formatter.result({
  "duration": 40995300,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.close_the_browser()"
});
formatter.result({
  "duration": 920774900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Need to enter multiple text",
  "description": "",
  "id": "search-google;need-to-enter-multiple-text;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open calculator site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the Title of the Page again",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Age \"20\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Height \"160\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Weight \"45\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tap on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Capture the BMI Result value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dataassignment.open_calculator_site()"
});
formatter.result({
  "duration": 5611433500,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 62793700,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1354243700,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 7754600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 11
    }
  ],
  "location": "Dataassignment.enter_Age(String)"
});
formatter.result({
  "duration": 150556900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Height(String)"
});
formatter.result({
  "duration": 143181200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Weight(String)"
});
formatter.result({
  "duration": 158954400,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.tap_on_Calculate_BMI()"
});
formatter.result({
  "duration": 743184800,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.capture_the_BMI_Result_value()"
});
formatter.result({
  "duration": 33703200,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.close_the_browser()"
});
formatter.result({
  "duration": 1062888700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Need to enter multiple text",
  "description": "",
  "id": "search-google;need-to-enter-multiple-text;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open calculator site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the Title of the Page again",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Age \"35\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Height \"160\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Weight \"70\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tap on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Capture the BMI Result value",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dataassignment.open_calculator_site()"
});
formatter.result({
  "duration": 5573409800,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 23806300,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1792568000,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 6946100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 11
    }
  ],
  "location": "Dataassignment.enter_Age(String)"
});
formatter.result({
  "duration": 230163200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Height(String)"
});
formatter.result({
  "duration": 157117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 14
    }
  ],
  "location": "Dataassignment.enter_Weight(String)"
});
formatter.result({
  "duration": 178355100,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.tap_on_Calculate_BMI()"
});
formatter.result({
  "duration": 885473600,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.capture_the_BMI_Result_value()"
});
formatter.result({
  "duration": 119796700,
  "status": "passed"
});
formatter.match({
  "location": "Dataassignment.close_the_browser()"
});
formatter.result({
  "duration": 745812300,
  "status": "passed"
});
});