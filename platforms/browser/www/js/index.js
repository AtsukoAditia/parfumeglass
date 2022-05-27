/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
var appBody = $('#deviceready');

document.addEventListener('deviceready', onDeviceReady, false);

// Function
function onDeviceReady() {
    appBody.load('/pages/login.html');
}
function toLogin() {
    appBody.html('');
    setTimeout(() => {
        appBody.load('/pages/login.html');
    }, 500);
}
function toDashboard() {
    appBody.html('');
    setTimeout(() => {
        appBody.load('/pages/dashboard.html');
    }, 500);
}
function toProjectList() {
    appBody.html('');
    setTimeout(() => {
        appBody.load('/pages/list_project.html');
    }, 500);
}
function toProjectDetail() {
    appBody.html('');
    setTimeout(() => {
        appBody.load('/pages/detail_project.html');
    }, 500);
}