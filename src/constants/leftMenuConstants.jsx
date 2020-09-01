import * as React from "react";
import TestRest from "../components/actionPages/TestRest/TestRest";
import SiteParse from "../components/actionPages/SiteParse/SiteParse";

export const MAIN_PAGE = "MAIN_PAGE";
export const TEST_REST = "TEST_REST";
export const PARSE_NEWS = "PARSE_NEWS";


export const TITLE = "Реализация паттернов на java";


export const LEFT_MENU = new Map([
    [MAIN_PAGE, {
        title: TITLE,
        description: "Данное приложение разработано для упрощения реалзиации" +
            "различных паттернов программирования посредством представления интерфейса для " +
            "демонстрации реализаций",
        actionPage: <TestRest/>
    }],
    [TEST_REST, {
        title: "Проверка коннекта с бэком",
        description: "Нажмите кнопку для отправки тестового запроса и получения ответа",
        actionPage: <TestRest/>
    }],
    [PARSE_NEWS, {
        title: "Парсинг указанного сайта",
        description: "Заполните поля для получения необходимых данных",
        actionPage: <SiteParse/>
    }]
]);
