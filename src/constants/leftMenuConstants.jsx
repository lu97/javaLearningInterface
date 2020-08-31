export const MAIN_PAGE = "MAIN_PAGE";
export const TEST_REST = "TEST_REST";
export const PARSE_NEWS = "PARSE_NEWS";


export const TITLE = "Реализация паттернов на java";


export const LEFT_MENU = new Map([
    [MAIN_PAGE, {
        title: "",
        description: "",
        pageData: {}
    }],
    [TEST_REST, {
        title: "Проверка коннекта с бэком",
        description: "Нажмите кнопку для отправки тестового запроса и получения ответа",
        pageData: {}
    }],
    [PARSE_NEWS, {
        title: "Парсинг указанного сайта",
        description: "Заполните поля для получения необходимых данных",
        pageData: {}
    }]
]);
