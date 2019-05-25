import React from "react";

const FruitTable = props => (
    <table className="yerr" style={{ borderSpacing: 20, borderStyle: 'solid' }}>
      <tbody>
        {props.data.map((fruitList, index) => (
          <tr key={index}>
            {fruitList.map((fruit, i) => (
              <td key={i}>
                {fruit}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )

export default FruitTable