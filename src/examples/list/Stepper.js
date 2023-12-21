/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2021 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Page from "../../app/Page.js";
import { List, ProgressStepper   } from "@lightningjs/ui";
import { Item, ImageCell } from "../itemComponents";
import { Lightning, Colors, Utils } from "@lightningjs/sdk";

export default class MyStepper extends Page {
  static _template() {
    return {
      ...super._template(),
      Content: {
        Stepper: { type: ProgressStepper  , x: 90, y: 195, labelColor:'#ffff6347', min: 0 },
      },
    };
  }
  _init() {
    this.tag("Stepper").Label = "";
  }
  _setup() {
    
    this.tag("Stepper").Label = "";
    this.tag("Stepper").paddings = 20;
    
  }

  _focus() {
    this.tag("Stepper").Label = "";
    this._setState("Stepper");
    this.setSmooth("alpha", 1);
    this.tag("Stepper").focusAnimation = this.animation({duration: 0.5, actions: [
        {p: 'scale', v: {0: 1, 1: 1.075}},
    ]});
  }

  static _states() {
    return [
      class Stepper extends this {
        _getFocused() {
          return this.tag("Stepper");
        }
      },
    ];
  }

  static get header() {
    return "Stepper component";
  }

  static get icon() {
    return "images/list.png";
  }
}
