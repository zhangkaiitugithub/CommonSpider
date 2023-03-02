// ==UserScript==
// @name         云平台自动化脚本
// @namespace    http://tampermonkey.net/
// @version      0.1.10
// @description  适用于健康云平台各类表单的数据填充
// @author       Benjamin Chiu.topfisherman@126.com
// @license MIT
// @icon         https://ehr.scwjxx.cn/favicon.ico
// @match        *://*.ithome.com/*
// @match        *://*.scwjxx.cn/*
// @require      https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js
// ==/UserScript==

(function ()
{
    'use strict';





    // 解决vue页面注入js修改input值，
    // 只有当接收到键盘的按键(随便哪个键盘的按键消息)，才会触发input和change事件,进而把输入框中的value赋值给预设的相关变量，到这一步才算走完整个设置value的过程。
    // 所以如果想给这类加料的输入框或者选择框用原生JS赋值，设置vlaue属性过后就必须手动触发一下input或change事件。
    const fkVueEvent = document.createEvent('Event');
    fkVueEvent.initEvent("input", true, true);//如果是select选择框把"input"改成"change"
    fkVueEvent.eventType = 'message';


    // =======体检表======Start=========
    function tiJian()
    {
        console.log("正在使用体检表填充功能.");


        // 体检表 所需变量 start
        // 体温
        const body_temperature = (Math.random() * (36.9 - 36) + 36).toFixed(1);
        // 脉搏
        const pulse_rate = Math.floor(Math.random() * (82 - 68 + 1)) + 68;
        // 呼吸频率
        const respiratory_rate = Math.floor(Math.random() * (21 - 16 + 1)) + 16;
        // 高压
        const blood_pressure_high = Math.floor(Math.random() * (138 - 128 + 1)) + 128;
        // 低压
        const blood_pressure_low = Math.floor(Math.random() * (88 - 78 + 1)) + 78;
        // 高压
        const blood_pressure_high_2 = Math.floor(Math.random() * (138 - 129 + 1)) + 129;
        // 低压
        const blood_pressure_low_2 = Math.floor(Math.random() * (88 - 78 + 1)) + 78;
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





        let form_s = $('form');
        for (let i=0; i<form_s.length; i++)
        {
            // 找到了目标form表单
            if (form_s[i].innerText.includes('体检日期') && form_s[i].innerText.includes('责任医生'))
            {
                console.log("找到目标form");
                // 获取所有行，并且遍历所有行
                let tr_s = form_s[i].getElementsByTagName("tr");
                for (let j=0; j<tr_s.length; j++)
                {
                    if (tr_s[j].innerText.includes("体温") && tr_s[j].innerText.includes("脉率"))
                    {
                        let inputs = tr_s[j].getElementsByTagName("input");
                        inputs[0].value = body_temperature;
                        inputs[0].dispatchEvent(fkVueEvent);
                        inputs[1].value = pulse_rate;
                        inputs[1].dispatchEvent(fkVueEvent);
                        console.log("找到了体温栏");
                    }
                    else if (tr_s[j].innerText.includes("呼吸频率") && tr_s[j].innerText.includes("左侧"))
                    {
                        let inputs = tr_s[j].getElementsByTagName("input");
                        inputs[0].value = respiratory_rate;
                        inputs[0].dispatchEvent(fkVueEvent);
                        inputs[1].value = blood_pressure_high;
                        inputs[1].dispatchEvent(fkVueEvent);
                        inputs[2].value = blood_pressure_low;
                        inputs[2].dispatchEvent(fkVueEvent);

                        console.log("找到血压栏");
                    }
                    else if (tr_s[j].innerText.includes("右侧"))
                    {
                        let inputs = tr_s[j].getElementsByTagName("input");
                        inputs[0].value = blood_pressure_high_2;
                        inputs[0].dispatchEvent(fkVueEvent);
                        inputs[1].value = blood_pressure_low_2;
                        inputs[1].dispatchEvent(fkVueEvent);

                        console.log("找到右侧血压栏");
                    }


                    // ========老年人专有功能=======Start=========
                    else if (tr_s[j].innerText.includes("老年人健康状态自我评估*") || tr_s[j].innerText.includes("老年人认知能力*")
                        || tr_s[j].innerText.includes("老年人情感状态*"))
                    {
                        const divs = tr_s[j].getElementsByTagName("div");
                        for (let i = 0; i < divs.length; i++)
                        {
                            if (divs[i].innerText.includes('2基本满意') && !divs[i].className.includes('checked'))
                                divs[i].click();
                            else if (divs[i].innerText.includes('1粗筛阴性') && !divs[i].className.includes('checked'))
                                divs[i].click();
                        }
                    }
                    // ========老年人专有功能=======End===========




                }
                console.log("测试使用.End");
            }
        }
    }
    // =======体检表======End=========


    // =======转诊单======Start=========
    function zhuanZhen()
    {
        console.log("正在使用转诊单填充功能.");


        // 转诊表 所需变量 start
        const zhuanZhen_hospital = "射洪市人民医院";
        const section = "内科";
        const zhuanZhen_doctor = "王平";
        const our_doctor = "王祥茂";
        const our_doctor_tel = "13547784526";

        // 初步印象
        const zhuanZhen_textarea_0 = "没明显症状。";
        // 转出原因
        const zhuanZhen_textarea_1 = "血压控制不稳定。";
        // 既往史
        const zhuanZhen_textarea_2 = "患者多年高血压病史。";
        // 治疗经过
        const zhuanZhen_textarea_3 = "经过治疗，血压控制依然不稳定。";
        // 转诊表 所需变量 End



        let form_s = $('form');
        for (let i=0; i<form_s.length; i++)
        {
            // 找到了目标form表单
            if (form_s[i].innerText.includes('双向转诊单') && form_s[i].innerText.includes('双向转诊(转出)单'))
            {
                console.log("找到目标form");

                let inputs = form_s[i].getElementsByTagName("input");
                inputs[9].value = zhuanZhen_hospital;
                inputs[9].dispatchEvent(fkVueEvent);

                // inputs[16].value = zhuanZhen_hospital;
                // inputs[16].dispatchEvent(fkVueEvent);

                inputs[10].value = section;
                inputs[10].dispatchEvent(fkVueEvent);

                inputs[11].value = zhuanZhen_doctor;
                inputs[11].dispatchEvent(fkVueEvent);

                inputs[12].value = our_doctor;
                inputs[12].dispatchEvent(fkVueEvent);

                inputs[20].value = our_doctor;
                inputs[20].dispatchEvent(fkVueEvent);

                inputs[21].value = our_doctor_tel;
                inputs[21].dispatchEvent(fkVueEvent);


                let textarea_s = form_s[i].getElementsByTagName("textarea");
                textarea_s[0].value = zhuanZhen_textarea_0;
                textarea_s[0].dispatchEvent(fkVueEvent);

                textarea_s[1].value = zhuanZhen_textarea_1;
                textarea_s[1].dispatchEvent(fkVueEvent);

                textarea_s[2].value = zhuanZhen_textarea_2;
                textarea_s[2].dispatchEvent(fkVueEvent);

                textarea_s[3].value = zhuanZhen_textarea_3;
                textarea_s[3].dispatchEvent(fkVueEvent);


                console.log("测试使用.End");
            }
        }
    }
    // =======转诊单======End=========



    // 程序入口
    document.addEventListener("keydown", function (fuckEvent)
    {
        if (fuckEvent.key === "F9")
        {
            console.log("You have pressed F9");

            let DllButton = "<div id='fuck.this.shit' " +
                "style='display: block; line-height: 38px; text-align: center; vertical-align: top; background-color: #25ae84; " +
                "cursor: pointer; color: #fff; margin-bottom: 2px; position: fixed; left: 0; top: 358px; width: 102px; z-index: 9999;'>" +
                "<a id='tiJian_a' target='_blank' style='font-size:16px; color:#fff; display: block; height: 100%; padding: 2px 11px;'>填充体检表</a>" +
                "<a id='zhuanzhen_a' target='_blank' style='font-size:16px; color:#fff; display: block; height: 100%; padding: 2px 11px;'>塞满转诊表</a>" +
                "</div>";

            $("body").append(DllButton);
            $("#tiJian_a").click(function ()
            {
                tiJian();
            });
            $("#zhuanzhen_a").click(function()
            {
                zhuanZhen();
            });
        }
    });



})();