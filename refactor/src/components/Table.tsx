import { model } from "../store/constants";

const Table = () => {
  const columns = model.result.table.columns;
  const data = model.result.table.data as Array<Record<string, unknown>>;
  return (
    <div className="table-container">
      <div className="table-heading">
        {columns.map((heading) => (
          <div key={heading.key} className="heading-cell">
            {heading.label}
          </div>
        ))}
      </div>
      {data.map((tableRow, index) => {
        return (
          <div key={index} className="table-row">
            {columns.map((col) => {
              // need to map each data to display among cells

              return (
                <div key={col.key} className="data-cell">
                  {String(tableRow[col.key])}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
