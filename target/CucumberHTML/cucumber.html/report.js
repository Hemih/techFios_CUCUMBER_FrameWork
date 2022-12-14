$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("techfiosLogin.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios Login Functionality Validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@techfiosLoginFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Scenario02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should not land on Dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo69@techfios.com",
        "abc123"
      ],
      "line": 22,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc1234"
      ],
      "line": 23,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "demo21@techfios.com",
        "ab123"
      ],
      "line": 24,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2523762500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@techfiosLoginFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 12,
      "name": "@Scenario02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters the username as \"demo69@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should not land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "TF_Login_step_definition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1251469300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo69@techfios.com",
      "offset": 29
    }
  ],
  "location": "TF_Login_step_definition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3384201400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "TF_Login_step_definition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3108411500,
  "status": "passed"
});
formatter.match({
  "location": "TF_Login_step_definition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4129740100,
  "status": "passed"
});
formatter.match({
  "location": "TF_Login_step_definition.user_should_not_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 2075251000,
  "status": "passed"
});
formatter.after({
  "duration": 770333900,
  "status": "passed"
});
formatter.before({
  "duration": 1461769800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@techfiosLoginFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 12,
      "name": "@Scenario02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the password as \"abc1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should not land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "TF_Login_step_definition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1066590200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "TF_Login_step_definition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3283286900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 29
    }
  ],
  "location": "TF_Login_step_definition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3115276000,
  "status": "passed"
});
formatter.match({
  "location": "TF_Login_step_definition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3979577700,
  "status": "passed"
});
formatter.match({
  "location": "TF_Login_step_definition.user_should_not_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 2069103200,
  "status": "passed"
});
formatter.after({
  "duration": 728625400,
  "status": "passed"
});
formatter.before({
  "duration": 1421599200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@techfiosLoginFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 12,
      "name": "@Scenario02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters the username as \"demo21@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the password as \"ab123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should not land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "TF_Login_step_definition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1214264500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo21@techfios.com",
      "offset": 29
    }
  ],
  "location": "TF_Login_step_definition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3326905400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab123",
      "offset": 29
    }
  ],
  "location": "TF_Login_step_definition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3112007800,
  "status": "passed"
});
formatter.match({
  "location": "TF_Login_step_definition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3981849500,
  "status": "passed"
});
formatter.match({
  "location": "TF_Login_step_definition.user_should_not_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 2066175700,
  "status": "passed"
});
formatter.after({
  "duration": 739228800,
  "status": "passed"
});
});