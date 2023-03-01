// ==UserScript==
// @name         体检表自动填充
// @namespace    http://tampermonkey.net/
// @version      0.1.8
// @description  适用于健康云平台体检表填充
// @author       Benjamin Chiu.topfisherman@126.com
// @icon         https://www.baidu.com/cache/icon/favicon.ico
// @icon         data:image/jpeg;base64,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AAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAeDhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTQQKAAAAAAABAAA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAACAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADPwAAAAYAAAAAAAAAAAAAADIAAAAyAAAABWcqaAeYmAAtADIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAADIAAAAyAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAAyAAAAAFJnaHRsb25nAAAAMgAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAMgAAAABSZ2h0bG9uZwAAADIAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVY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ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/+4AIUFkb2JlAGSAAAAAAQMAEAMCAwYAAAAAAAAAAAAAAAD/2wCEABIODg4QDhUQEBUeExETHiMaFRUaIyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBFBMTFhkWGxcXGxQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/CABEIADIAMgMBIgACEQEDEQH/xAC0AAEAAwADAQAAAAAAAAAAAAAABQYHAgMEAQEAAwEAAwAAAAAAAAAAAAAAAAIEBQEDBhAAAgMAAQQCAwAAAAAAAAAAAwQBAgUAEBE0BiATMCEzEQACAQICBgYGCwAAAAAAAAABAgMAESESMUEiMhMEEFFxciODIEJiQ1NzMGGxUoLC4jNjk9MSAAECAgcFCQEAAAAAAAAAAAIBEgADEBEhIjJSEyBygpIjMVFCYjNDU3ODs//aAAwDAQECEQMRAAAAsvX4a82voyiWTmWXCRAETw5/cS7xV+91D0z9Fkz+et6r2MeOJiZqLzLafKWuX9TLFSpmICBhwNxYcDcWHA3FhwP/2gAIAQIAAQUAHYV+WpMda+cuIxZKkCguL07aZtLtFyXvPx//2gAIAQMAAQUAXTXKE6Bhde8wBfQLXjJaltyLV+mb87/L/9oACAEBAAEFANPYEhKXsKjExMTHw3krnauO47J6jico76jPImJjo/5CgAsFe9arPGFjrXV2GUOZnsaT1uP+Rnf3adVUHr+zQ2P9zOJhPGZ4/wCRovsogMcx753rr7sZ/r+ej1fCT7XchrQDneu56X5P/9oACAECAgY/AFES6oK0x8Y8Md9P7LFQi4PkK6HNClMNsyq6WG99dALMHo67zcLg080NkC1E9wk/nKhxkpl5tr//2gAIAQMCBj8AG1dckcROv8kKqJrS8wYuKXTWlishENNeXmX1OeHMCVu4y36O1MMWbf8A/9oACAEBAQY/ABHl4kzC+W+UAe21BJvAkP3jdD5tAg3BxBHo8WMjMFAKnXasrqVPUatE901xttL+igkvgS9THYPdl/0q4xB0HpPYKKTIsi5TgwvrXdovybZT8NtHlyUY50KN9evutWxJeP4TbS/hX1KWJrwztgFbdc/xP0HsFHun7UricxIsa6r6T3E36bl+WiAjOHEfF/LT3VdZNQ8zIphgjZXzNss2XxMsS+30HsFCXl2CuzZCSL7LK7fkoyTOZHOlmNzQe3BhOiR9fy4996DheNNbGR8f64v24+niAEqQBhjYikjjtGA4Zme4GUB12V9ffoOV48w9440fKi3E+k//2Q==
// @match        *://*.ithome.com/*
// @match        *://*.scwjxx.cn/*
// @require      https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js
// ==/UserScript==

(function ()
{
    'use strict';

    // 体检表 所需变量 start
    // 体温
    const body_temperature = (Math.random() * (36.9 - 36) + 36).toFixed(1);
    // 脉搏
    const pulse_rate = Math.floor(Math.random() * (82 - 68 + 1)) + 68;
    // 呼吸频率
    const respiratory_rate = Math.floor(Math.random() * (21 - 16 + 1)) + 16;
    // 高压
    const blood_pressure_high = Math.floor(Math.random() * (138 - 120 + 1)) + 120;
    // 低压
    const blood_pressure_low = Math.floor(Math.random() * (88 - 72 + 1)) + 72;
    // 高压
    const blood_pressure_high_2 = Math.floor(Math.random() * (138 - 120 + 1)) + 120;
    // 低压
    const blood_pressure_low_2 = Math.floor(Math.random() * (88 - 72 + 1)) + 72;
    // 血红蛋白
    const hemoglobin = Math.floor(Math.random() * (155 - 115 + 1)) + 115;
    // 白细胞
    const hemameba = (Math.random() * (10 - 4) + 4).toFixed(2);
    // 血小板
    const blood_platelet = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    // 血糖
    const blood_sugar = (Math.random() * (6 - 4) + 4).toFixed(2);
    // 高血糖 随机血糖
    const blood_sugar_high = (Math.random() * (12 - 6.2) + 6.2).toFixed(2);
    // 体检表 所需变量 end



    document.addEventListener("keydown", function (fuckEvent)
    {
        if (fuckEvent.key === "F9")
        {
            console.log("You have pressed F9");

            let DllButton = "<div id='fuck.this.shit' " +
                "style='display: block; line-height: 38px; text-align: center; vertical-align: top; background-color: #25ae84; " +
                "cursor: pointer; color: #fff; margin-bottom: 2px; position: fixed; left: 0; top: 358px; width: 102px; z-index: 9999;'>" +
                "<a target='_blank' style='font-size:16px; color:#fff; display: block; height: 100%; padding: 2px 11px;'>填充体检表</a>" +
                "<a id='zhuanzhen' target='_blank' style='font-size:16px; color:#fff; display: block; height: 100%; padding: 2px 11px;'>塞满转诊表</a>" +
                "</div>";

            $("body").append(DllButton);
            $("#zhuanzhen").click(function()
            {
                JustATest();
            });

        }


        // =======转诊单======Start=========
        function JustATest()
        {
            console.log("suck my cock!");
            let form_s = $('form');
            for (let i=0; i<form_s.length; i++)
            {
                // 找到了目标form表单
                if (form_s[i].innerText.includes('双向转诊单') && form_s[i].innerText.includes('双向转诊(转出)单'))
                {
                    console.log("找到目标form");
                }
            }
        }
        // =======转诊单======End=========




    });


})();