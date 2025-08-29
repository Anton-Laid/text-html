export function remakeTextInHTMLUlLi(str: string) {
  const lines = str.split("\n");

  return `<ul><li data-mce-style="list-style-type: none;" style="list-style-type: none;"><ul>
   ${lines
     .map(
       (line) =>
         `  <li><span style="font-family: georgia, &quot;times new roman&quot;, times, serif; font-size: medium;">${line}</span></li>`
     )
     .join("")}
 </ul></li></ul>`;
}

export function remakeTextNumbersHTMLUlLi(str: string) {
  const lines = str.split("\n").filter(Boolean);

  return `
    <ol style="list-style-type:none;">
      <li style="list-style-type:none;">
        <ol>
          ${lines
            .map(
              (line) =>
                `<li><span style="font-family: georgia, &quot;times new roman&quot;, times, serif; font-size: medium;">${line}</span></li>`
            )
            .join("")}
        </ol>
      </li>
    </ol>
  `;
}
export function remakeTableImage(numberScr: number, textScr: string) {
  return ` <p dir="ltr">&nbsp;&nbsp;</p>
<table border="1" frame="border" style="border-color: #4c526d; border-width: 1px; ; width: 100%;">
<tbody>
<tr>
<td></td>
</tr>
</tbody>
</table>
<p style="text-align: center;"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">Рисунок ${numberScr}. ${textScr}</span></p>
 <p dir="ltr">&nbsp;&nbsp;</p>`;
}

export function remakeStep(numberScr: number, textScr: string) {
  return `
  <p dir="ltr">&nbsp;&nbsp;</p>
  <p>
  <span
    style="
      font-family: georgia, 'times new roman', times, serif;
      font-size: medium;
      color: #4c526d;
    "
    data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium; color: #4c526d;"
    ><b
      ><span  style="margin-left: 30px;">Шаг ${numberScr}. ${textScr}</span
      >
</p>
<p dir="ltr">&nbsp;&nbsp;</p>
`;
}

export function remakeTable(numberScr: number, textScr: string) {
  return `<p dir="ltr"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">&nbsp;</span></p>
  <p><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">&nbsp;Таблица ${numberScr}.&nbsp;<span id="docs-internal-guid-7a635731-7fff-96e9-1738-1178a32c75c2">
${textScr}</span></span></p>
<p style="text-align: left;" data-mce-style="text-align: left;"><span><img src="https://peo.roskazna.ru/draftfile.php/88628/user/draft/805114746/4_3_%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0_%D0%B2_%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D1%8E_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2_%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D1%85_%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2.png" width="4953" height="3379" data-mce-src="https://peo.roskazna.ru/draftfile.php/88628/user/draft/805114746/4_3_%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0_%D0%B2_%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D1%8E_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2_%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D1%85_%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2.png"></span></p>
<p dir="ltr"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">&nbsp;</span></p>
  `;
}

export function remakeImageLink(
  num: string,
  link: string,
  text: string,
  pdf: boolean,
  center: boolean,
  whitespace: boolean
) {
  return `${whitespace ? '<p dir="ltr">&nbsp;&nbsp;</p>' : ""}
    ${
      !center
        ? `<p id="yui_3_17_2_1_1751443053004_571" style="margin-left:30px; text-align: left;" data-mce-style="text-align: left;"><strong style="color: rgb(76, 82, 109); font-family: georgia, &quot;times new roman&quot;, times, serif; font-size: medium; text-decoration-line: underline;" data-mce-style="color: #4c526d; font-family: georgia, 'times new roman', times, serif; font-size: medium; text-decoration-line: underline;"><a href="${link}" target="_blank" data-mce-href="https://peo.roskazna.ru/0">${num} ${text} ${
            pdf ? "(версия pdf)" : ""
          }</a><br></strong></p>`
        : `<p id="yui_3_17_2_1_1751443053004_571" style="text-align: center;"><strong style="color: rgb(76, 82, 109); font-family: georgia, &quot;times new roman&quot;, times, serif; font-size: medium; text-decoration-line: underline;"><a href="https://peo.roskazna.ru/0" target="_blank" data-mce-href="https://peo.roskazna.ru/0">${num} ${text} ${
            pdf ? "(версия pdf)" : ""
          }</a>&nbsp;</strong></p>`
    }
     ${whitespace ? '<p dir="ltr">&nbsp;&nbsp;</p>' : ""}
    `;
}

export function remakeMarginLeftText(str: string) {
  const refArr = str.split("\n");
  return refArr
    .map(
      (text) => `<p>
  <span
    style="
      font-size: medium;
      font-family: georgia, 'times new roman', times, serif;
      margin-left: 30px;
    "
  >${text}</span
  >
</p>`
    )
    .join("");
}

export function remakeExample(str: string) {
  return `<p>
  <span
    style="
      font-size: medium;
      font-family: georgia, 'times new roman', times, serif;
      margin-left: 30px;
    "
  >${str}</span
  >
</p>`;
}

export function remakeTopic(str: string) {
  return `
  <p dir="ltr">&nbsp;&nbsp;</p>
  <span style="display: flex; gap: 30px">
  <img
    style="max-width: 54px; max-height: 18px"
    src="https://peo.roskazna.ru/draftfile.php/88628/user/draft/3356934/%D0%91%D0%BB%D0%BE%D0%BA%20%D0%B4%D0%BB%D1%8F%20%D0%B3%D0%BB%D0%B0%D0%B2%D1%8B%20%282%29.png"
  />
  <span
    style="
      font-family: georgia, 'times new roman', times, serif;
      font-size: medium;
      color: #4c526d;
    "
    ><b style="font-size: x-large; margin: 0">${str}</b>
  </span>
</span>
<p dir="ltr">&nbsp;&nbsp;</p>
`;
}

export function remakeImageLinkTest(link: string) {
  return `<p>
  <span
    style="
      font-family: georgia, 'times new roman', times, serif;
      font-size: medium;
    "
    >&nbsp;</span
  >
</p>
<p style="text-align: center">
  <span
    style="
      text-decoration: underline;
      font-family: georgia, 'times new roman', times, serif;
      font-size: medium;
      color: #4c526d;
    "
  >
    <a
      href="${link}"
      target="_blank"
    >
      <img
        src="https://peo.roskazna.ru/pluginfile.php/83640/mod_book/chapter/5049/%D1%82%D0%B5%D1%81%D1%82%D1%8B%201.png"
        width="100%"
        height="630"
      />
    </a>
  </span>
</p>`;
}

export function remakeTableConst(num: string, str: string) {
  return `<p><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">&nbsp; &nbsp;</span></p>
  <p dir="ltr"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">Таблица ${num}. ${str}</span></p>
  <table border="1" style="border-color: #4c526d; border-width: 1px; width: 100%; border-style: solid;" data-mce-style="border-color: #4c526d; border-width: 1px; width: 100%; border-style: solid;">
  <p dir="ltr"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;"><br data-mce-bogus="1"></span></p>
  <p dir="ltr">&nbsp;&nbsp;</p>`;
}

export function remakeTableDrawing(num: string, str: string) {
  return `<p dir="ltr">&nbsp;&nbsp;</p>
    <p dir="ltr" style="text-align: center;" data-mce-style="text-align: center;"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">Рисунок ${num}. ${str}</span></p>
    <-- Удалить строку -->
    <p dir="ltr">&nbsp;&nbsp;</p>
    <p dir="ltr">&nbsp;&nbsp;</p>`;
}

export function remakeThree(num: string, str: string) {
  return `<p dir="ltr">&nbsp;&nbsp;</p>
  <p dir="ltr"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">Таблица ${num}. ${str} </span></p>
  Вставить)
    <p dir="ltr">&nbsp;&nbsp;</p>`;
}

export function remakeWhitespaceImageText(num: string, str: string) {
  return `<p dir="ltr">&nbsp;&nbsp;</p>
  Удалить строчку
  <p dir="ltr" style="text-align: center;" data-mce-style="text-align: center;"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">Рисунок ${num}. ${str}</span></p>
  <p dir="ltr">&nbsp;&nbsp;</p>
  `;
}

export function remakeAnimationText(num: string, str: string) {
  return `<p dir="ltr">&nbsp;&nbsp;</p>
  <p dir="ltr"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;"></span></p>
Удалить строчку
<p dir="ltr" style="text-align: center;" data-mce-style="text-align: center;"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;" data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">Анимированный рисунок ${num}. ${str}</span></p>
  <p dir="ltr">&nbsp;&nbsp;</p>
  `;
}
