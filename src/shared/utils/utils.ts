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
