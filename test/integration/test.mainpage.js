/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint no-undef: 0 */

var global_position = {
  lat: 39.739236,
  lng: -104.990251
};

casper.options.waitTimeout = 10000;
casper.test.begin('Wildlife Predictor', 2, function suite(test) {
  var baseHost = 'http://localhost:3000';

  casper.start(baseHost);
  casper.then(function (done) {
    casper.test.comment('Starting Testing');
    test.assertHttpStatus(200, 'Server running on port: 3000');
    test.assertTitle('Predict Wildfire Intensity', 'Title is correct');
  });

  casper.open(baseHost, {
    data: {
      method: 'POST',
      data: global_position
    }
  }, function(response){
      if(response.status == 200){
        require('utils').dump(this.page.content);
     }
  });

  casper.then(function() {
    this.echo('POSTED it.');
  });

  casper.run(function () {
    test.done();
  });
});
