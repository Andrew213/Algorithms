const letter = `Добрый день! Меня зовут Андрей Кочанов, я frontend-разработчик.
У меня более 2-х лет опыта коммерческой разработки.
На прошлых работах занимался разработкой административного интерфейса для разных продуктов. Работал со стеком - реакт, тс, php, less, mongo/postgres/mysql

Ваша вакансия показалась мне интересной. Уверен, смогу качественно усилить вашу команду
`;

window.scroll(0, 360);

const sendResponseLetter = () => {
  const btn_response_letter_toggle = document.querySelector(
    '[data-qa="vacancy-response-letter-toggle"]'
  );

  btn_response_letter_toggle.click();

  setTimeout(() => {
    const textArea_letter = document.getElementsByTagName("textarea")[0];
    textArea_letter.value = letter;
  }, 1000);

  setTimeout(() => {
    const btn_send_letter = document.querySelector(
      '[data-qa="vacancy-response-letter-submit"]'
    );

    btn_send_letter.click();
  }, 1000);

  // добавляю искусственную задержку
};

let skiped = 0;

const HHbot = () => {
  console.log(1);

  const vacancy_card_item = document.querySelectorAll(".serp-item")[skiped];

  vacancy_card_item.scrollIntoView();

  console.log(
    vacancy_card_item.querySelector('[data-qa="serp-item__title"]').textContent
  );

  const btn_vacancy_response = vacancy_card_item.querySelector(
    '[data-qa="vacancy-serp__vacancy_response"]'
  );

  if (!btn_vacancy_response) {
    skiped += 1;
    HHbot();
  }

  btn_vacancy_response.click();

  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Задержка при отправке отклика
      resolve("result");
    }, 1000);
  }).then((res) => {
    //

    const btn_relocation_warning = document.querySelector(
      '[data-qa="relocation-warning-confirm"]'
    );

    const textArea = document.querySelector(
      '[data-qa="vacancy-response-popup-form-letter-input"]'
    );

    const btn_close_popup = document.querySelector(
      '[data-qa="bloko-modal-close"]'
    );

    if (btn_relocation_warning) {
      btn_relocation_warning.click();
    }

    if (textArea) {
      console.log(`btn_close_popup `, btn_close_popup);
      setTimeout(() => {
        btn_close_popup.click();
      }, 100);

      promise_send_letter = new Promise((resolve) => {
        setTimeout(() => {
          // Задержка при отправке сопроводительного
          resolve("result");
        }, 1000);
      });
    } else {
      sendResponseLetter();
      setTimeout(() => {}, 1000);
    }
    setTimeout(() => {
      skiped += 1;
      HHbot();
    }, 1000);
  });
};
