export function remakeTextInHTMLUlLi(str: string) {
  const refArr = str.split("\n");
  return refArr
    .map(
      (text) => `<li style="list-style-type: none;">
<ul>
<li dir="ltr" aria-level="2">
<p dir="ltr" role="presentation"><span style="font-family: georgia, 'times new roman', times, serif; font-size: medium;">${text}</span></p>
</li>
</ul>
</li>`
    )
    .join("");
}

export function remakeTableImage(numberScr: number, textScr: string) {
  return `<table
        border={1}
        frame={true}
        style="border-color: #4c526d; border-width: 1px; width: 100%"
      >
        <tbody>
          <tr>
            <td>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
      <p style="text-align: center">
        <span
          style="
      font-family: georgia, 'times new roman', times, serif;
      font-size: medium;
    "
        >
          Рисунок ${numberScr}. ${textScr}
        </span>
      </p>
      <p>
        <span
          style="
      font-family: georgia, 'times new roman', times, serif;
      font-size: medium;
    "
        >
          &nbsp;
        </span>
      </p>`;
}

export function remakeStep(numberScr: number, textScr: string) {
  return `<p>
  <span
    style="
      font-family: georgia, 'times new roman', times, serif;
      font-size: medium;
      color: #4c526d;
    "
    data-mce-style="font-family: georgia, 'times new roman', times, serif; font-size: medium; color: #4c526d;"
    ><b
      ><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span
      ><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span
      ><span>&nbsp;</span><span>&nbsp;</span>        Шаг ${numberScr}. ${textScr}</span
      >
</p>`;
}

export function remakeImageLink(link: string, text: string) {
  return `  <p id="yui_3_17_2_1_1751443053004_571" style="text-align: center">
      <span style="text-decoration: underline"
        ><span
          style="
            font-family: georgia, 'times new roman', times, serif;
            font-size: medium;
            color: #4c526d;
            text-decoration: underline;
          "
        >
          <a href="${link}" target="_blank">
            <strong>${text}</strong>
            ></a
          ></span
        ></span
      >
    </p>`;
}

export function remakeMarginLeftText(str: string) {
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
  return `<span style="display: flex; gap: 30px">
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
</span>`;
}
