let getDataCarbonFootprints;
export default getDataCarbonFootprints = async (root) => {
  const table = root.querySelector(".table-refresh__table");
  const response = await fetch(root.dataset.url);
  const data = await response.json();

  table.querySelector("thead tr").innerHTML = `
    <th>Product</th>
    <th>Variety</th>
    <th>Score</th>
    <th>Sourcing Distance</th>
    <th>Weight</th>
    <th>Footprint</th>
  `;
  table.querySelector("tbody").innerHTML = "";

  for (const row of data) {
    table.querySelector("tbody").insertAdjacentHTML("beforeend", `
      <tr>
        <td>${row.product_item}</td>
        <td>${row.product_variety}</td>
        <td>${row.carbon_footprint_score}</td>
        <td>${row.sourcing_distance}</td>
        <td>${row.product_weight}</td>
        <td>${row.footprint}</td>
      </tr>
    `);
  }
};