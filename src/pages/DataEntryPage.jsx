// DataEntryPage.jsx
import React, { useState, useEffect } from "react";
import "./DataEntryPage.css";
const DataEntryPage = () => {
  const [diagnosticFeatures0, setDiagnosticFeatures0] = useState([
    { id: 0, feature: "" },
    // Добавьте другие начальные типы сбоев, если нужно
  ]);
  const [diagnosticFeatures1, setDiagnosticFeatures1] = useState([
    { id: 0, feature: "" },
    // Добавьте другие начальные причины сбоев, если нужно
  ]);
  const [diagnosticFeatures2, setDiagnosticFeatures2] = useState([
    { id: 0, feature: "" },
    // Добавьте другие начальные диагностические признаки, если нужно
  ]);
  const diagnosticOptions0 = [
    "Аномальное напряжение",
    "Неравномерный ток",
    "Отклонение от нормы",
    "Неисправность датчика",
    "Неправильная настройка",
    "Нестабильная работа",
    // Добавьте другие варианты, если нужно
  ];
  const diagnosticOptions1 = [
    "Электрический сбой",
    "Механический сбой",
    "Проблемы с питанием",
    "Проблемы с охлаждением",
    "Вибрация",
    "Неправильное напряжение",
    // Добавьте другие варианты, если нужно
  ];
  const diagnosticOptions2 = [
    "Перегрев",
    "Вибрация",
    "Неправильное напряжение",
    "Нестабильный ток",
    "Повышенное энергопотребление",
    "Неправильная конфигурация",
    // Добавьте другие варианты, если нужно
  ];
  const [matrix0, setMatrix0] = useState([[0]]);
  const [matrix1, setMatrix1] = useState([[0]]);
  const [matrix2, setMatrix2] = useState([[0]]);

  const handleAddRow0 = () => {
    setDiagnosticFeatures0((prevFeatures) => [
      ...prevFeatures,
      { id: prevFeatures.length, feature: "" },
    ]);
    const updatedMatrix0 = [
      ...matrix0,
      new Array(matrix0[0].length).fill(0),
    ].map((row) => [...row, 0]);
    setMatrix0(updatedMatrix0);
    // add column to matrix1
    const updatedColMatrix1 = matrix1.map((row) => [...row, 0]);
    setMatrix1(updatedColMatrix1);
    // add column to matrix2
    const updatedColMatrix2 = matrix2.map((row) => [...row, 0]);
    setMatrix2(updatedColMatrix2);
  };

  const handleFeatureChange0 = (id, newFeature) => {
    setDiagnosticFeatures0((prevFeatures) => {
      const updatedFeatures = prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, feature: newFeature } : feature
      );
      return updatedFeatures;
    });
  };
  const handleRemoveF = (index) => {
    if (matrix0.length > 1) {
      setDiagnosticFeatures0((prevDiagnosticFeatures0) => {
        const updatedFeatures = prevDiagnosticFeatures0.filter(
          (_, i) => i !== index
        );
        return updatedFeatures.map((feature, i) => ({
          id: i,
          feature: feature.feature,
        }));
      });

      setMatrix0((prevMatrix0) => {
        const updatedMatrixF = prevMatrix0.map((row) => {
          const updatedRow = [...row];
          updatedRow.splice(index, 1);
          return updatedRow;
        });
        updatedMatrixF.splice(index, 1);
        return updatedMatrixF;
      });

      setMatrix1((prevMatrix1) => {
        const updatedMatrix1 = prevMatrix1.map((row) => {
          const updatedRow = [...row];
          updatedRow.splice(index, 1);
          return updatedRow;
        });
        return updatedMatrix1;
      });

      setMatrix2((prevMatrix2) => {
        const updatedMatrix2 = prevMatrix2.map((row) => {
          const updatedRow = [...row];
          updatedRow.splice(index, 1);
          return updatedRow;
        });
        return updatedMatrix2;
      });
    }
  };

  const handleAddRow1 = () => {
    setDiagnosticFeatures1((prevFeatures) => [
      ...prevFeatures,
      { id: prevFeatures.length, feature: "" },
    ]);
    const updatedMatrix1 = [...matrix1, new Array(matrix1[0].length).fill(0)];
    setMatrix1(updatedMatrix1);
  };

  const handleFeatureChange1 = (id, newFeature) => {
    setDiagnosticFeatures1((prevFeatures) => {
      const updatedFeatures = prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, feature: newFeature } : feature
      );
      return updatedFeatures;
    });
  };

  const handleRemoveRC = (index) => {
    if (matrix1.length > 1) {
      setDiagnosticFeatures1((prevDiagnosticFeatures1) => {
        const updatedDiagnosticFeatures1 = prevDiagnosticFeatures1.filter(
          (_, i) => i !== index
        );
        return updatedDiagnosticFeatures1.map((feature, i) => ({
          ...feature,
          id: i,
        }));
      });

      setMatrix1((prevMatrix1) => {
        const updatedMatrixRC = prevMatrix1.filter((_, i) => i !== index);
        return updatedMatrixRC;
      });
    }
  };

  const handleAddRow2 = () => {
    setDiagnosticFeatures2((prevFeatures) => [
      ...prevFeatures,
      { id: prevFeatures.length, feature: "" },
    ]);
    const updatedMatrix2 = [...matrix2, new Array(matrix2[0].length).fill(0)];
    setMatrix2(updatedMatrix2);
  };

  const handleFeatureChange2 = (id, newFeature) => {
    setDiagnosticFeatures2((prevFeatures) => {
      const updatedFeatures = prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, feature: newFeature } : feature
      );
      return updatedFeatures;
    });
  };

  const handleRemoveS = (index) => {
    if (matrix2.length > 1) {
      setDiagnosticFeatures2((prevDiagnosticFeatures2) => {
        const updatedDiagnosticFeatures2 = prevDiagnosticFeatures2.filter(
          (_, i) => i !== index
        );
        return updatedDiagnosticFeatures2.map((feature, i) => ({
          ...feature,
          id: i,
        }));
      });

      setMatrix2((prevMatrix2) => {
        const updatedMatrixS = prevMatrix2.filter((_, i) => i !== index);
        return updatedMatrixS;
      });
    }
  };

  const handleFeatureChangeMatrix = (rowIndex, columnIndex, value, matrix) => {
    if (matrix === "matrix0") {
      const updatedMatrix0 = [...matrix0];
      updatedMatrix0[rowIndex][columnIndex] = value;
      setMatrix0(updatedMatrix0);
    }
    if (matrix === "matrix1") {
      const updatedMatrix1 = [...matrix1];
      updatedMatrix1[rowIndex][columnIndex] = value;
      setMatrix1(updatedMatrix1);
    }
    if (matrix === "matrix2") {
      const updatedMatrix2 = [...matrix2];
      updatedMatrix2[rowIndex][columnIndex] = value;
      setMatrix2(updatedMatrix2);
    }
  };

  const [selectedOption, setSelectedOption] = useState("create-new");
  const [equipmentName, setEquipmentName] = useState("");
  const [existingEquipment, setExistingEquipment] = useState([
    { id: 1, name: "Оборудование 1" },
    { id: 2, name: "Оборудование 2" },
    { id: 3, name: "Оборудование 3" },
  ]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleEquipmentNameChange = (e) => {
    setEquipmentName(e.target.value);
  };

  const handleExistingEquipmentChange = (e) => {
    setSelectedEquipment(
      existingEquipment.find((eq) => eq.id === parseInt(e.target.value))
    );
  };

  return (
    <div className="data-entry-container">
      <header>
        <h1>Ввод данных для обнаружения сбоев</h1>
        <p>
          Введите информацию о типах сбоев, причинах, диагностических функциях и
          матрицах.
        </p>
      </header>
      <div className="description-parameters">
        <h1>Описание секции параметров</h1>
        <p>
          Заполните информацию о типах сбоев, их причинах, диагностических
          признаках и матрицах. Эти данные будут использованы для дальнейшего
          анализа и построения системы обнаружения сбоев.
        </p>
      </div>
      <div className="equipment-management">
        <h2>Управление оборудованием</h2>
        <div className="option-container">
          <label>
            <input
              type="radio"
              name="option"
              value="create-new"
              checked={selectedOption === "create-new"}
              onChange={handleOptionChange}
            />
            Cоздать новое оборудование
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="create-copy"
              checked={selectedOption === "create-copy"}
              onChange={handleOptionChange}
            />
            Cоздать копию существующего оборудования
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="modify-existing"
              checked={selectedOption === "modify-existing"}
              onChange={handleOptionChange}
            />
            Изменить существующее оборудование
          </label>
        </div>

        <div>
          {selectedOption === "create-new" && (
            <div>
              <label>Название оборудования:</label>
              <input
                type="text"
                value={equipmentName}
                onChange={handleEquipmentNameChange}
              />
            </div>
          )}
          {selectedOption === "create-copy" && (
            <div>
              <label>Существующее оборудование:</label>
              <select
                value={selectedEquipment?.id}
                onChange={handleExistingEquipmentChange}
              >
                <option value="">Выбор оборудования</option>
                {existingEquipment.map((eq) => (
                  <option key={eq.id} value={eq.id}>
                    {eq.name}
                  </option>
                ))}
              </select>
              <label>Новое имя оборудования:</label>
              <input
                type="text"
                value={equipmentName}
                onChange={handleEquipmentNameChange}
              />
            </div>
          )}
          {selectedOption === "modify-existing" && (
            <div>
              <label>Существующее оборудование:</label>
              <select
                value={selectedEquipment?.id}
                onChange={handleExistingEquipmentChange}
              >
                <option value="">Выбор оборудования</option>
                {existingEquipment.map((eq) => (
                  <option key={eq.id} value={eq.id}>
                    {eq.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      <div className="tables-section">
        <div className="data-table">
          <div className="table-description">
            <p>
              Введите типы сбоев. Это поможет классифицировать различные виды
              технических проблем.
            </p>
          </div>
          <table className="table-data">
            <thead>
              <tr>
                <th>F</th>
                <th>Вид отказа</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              {diagnosticFeatures0.map((feature, index) => (
                <tr key={feature.id}>
                  <td>{feature.id}</td>
                  <td>
                    <input
                      type="text"
                      value={feature.feature}
                      onChange={(e) =>
                        handleFeatureChange0(index, e.target.value, "table1")
                      }
                      list="diagnostic-options-1"
                      placeholder="Введите тип сбоя"
                    />
                    <datalist id="diagnostic-options-1">
                      {diagnosticOptions1.map((option) => (
                        <option key={option} value={option} />
                      ))}
                    </datalist>
                  </td>
                  <td>
                    <button
                      className="remove-row"
                      onClick={() => handleRemoveF(index)}
                    >
                      &#10006;
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="3"
                  className="add-row"
                  onClick={() => handleAddRow0()}
                >
                  +
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="data-table">
          <table className="table-data">
            <thead>
              <tr>
                <th>RC</th>
                <th>Причина отказа</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              {diagnosticFeatures1.map((feature, index) => (
                <tr key={feature.id}>
                  <td>{feature.id}</td>
                  <td>
                    <input
                      type="text"
                      value={feature.feature}
                      onChange={(e) =>
                        handleFeatureChange1(index, e.target.value)
                      }
                      list="diagnostic-options-2"
                      placeholder="Введите причину сбоя"
                    />
                    <datalist id="diagnostic-options-2">
                      {diagnosticOptions2.map((option) => (
                        <option key={option} value={option} />
                      ))}
                    </datalist>
                  </td>
                  <td>
                    <button
                      className="remove-row"
                      onClick={() => handleRemoveRC(index)}
                    >
                      &#10006;
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="add-row" onClick={handleAddRow1}>
                  +
                </td>
              </tr>
            </tbody>
          </table>
          <div className="table-description">
            <p>
              {" "}
              Введите причины, которые могут вызвать соответствующие типы сбоев.
              Это поможет установить корреляции между типами сбоев и их
              возможными причинами.
            </p>
          </div>
        </div>

        <div className="data-table">
          <div className="table-description">
            <p>
              Введите диагностические признаки, которые могут помочь в
              идентификации различных типов сбоев. Это позволит определить
              ключевые параметры для системы диагностики.
            </p>
          </div>
          <table className="table-data">
            <thead>
              <tr>
                <th>S</th>
                <th>Диагностический признак</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              {diagnosticFeatures2.map((feature, index) => (
                <tr key={feature.id}>
                  <td>{feature.id}</td>
                  <td>
                    <input
                      type="text"
                      value={feature.feature}
                      onChange={(e) =>
                        handleFeatureChange2(index, e.target.value)
                      }
                      list="diagnostic-options0"
                      placeholder="Введите диагностический признак"
                    />
                    <datalist id="diagnostic-options0">
                      {diagnosticOptions0.map((option) => (
                        <option key={option} value={option} />
                      ))}
                    </datalist>
                  </td>
                  <td>
                    <button
                      className="remove-row"
                      onClick={() => handleRemoveS(index)}
                    >
                      &#10006;
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="add-row" onClick={handleAddRow2}>
                  +
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="matrices-section">
          <div className="matrix">
            <h2>Матрица 1</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  <th></th>
                  {matrix0[0].map((_, index) => (
                    <th key={index}>
                      F{index}
                      <button
                        className="remove-column"
                        onClick={() => handleRemoveF(index)}
                      >
                        &#10006;
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix0.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <th>
                      F{rowIndex}
                      <button
                        className="remove-row"
                        onClick={() => handleRemoveF(rowIndex)}
                      >
                        &#10006;
                      </button>
                    </th>
                    {row.map((cell, columnIndex) => (
                      <td key={columnIndex}>
                        <input
                          className="cell-input"
                          type="text"
                          value={cell}
                          onChange={(e) =>
                            handleFeatureChangeMatrix(
                              rowIndex,
                              columnIndex,
                              e.target.value,
                              "matrix0"
                            )
                          }
                        ></input>
                      </td>
                    ))}
                  </tr>
                ))}

                {matrix1.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <th>
                      RC{rowIndex}
                      <button
                        className="remove-row"
                        onClick={() => handleRemoveRC(rowIndex)}
                      >
                        &#10006;
                      </button>
                    </th>
                    {row.map((cell, columnIndex) => (
                      <td key={columnIndex}>
                        <input
                          className="cell-input"
                          type="text"
                          value={cell}
                          onChange={(e) =>
                            handleFeatureChangeMatrix(
                              rowIndex,
                              columnIndex,
                              e.target.value,
                              "matrix1"
                            )
                          }
                        ></input>
                      </td>
                    ))}
                  </tr>
                ))}

                {matrix2.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <th>
                      S{rowIndex}
                      <button
                        className="remove-row"
                        onClick={() => handleRemoveS(rowIndex)}
                      >
                        &#10006;
                      </button>
                    </th>
                    {row.map((cell, columnIndex) => (
                      <td key={columnIndex}>
                        <input
                          className="cell-input"
                          type="text"
                          value={cell}
                          onChange={(e) =>
                            handleFeatureChangeMatrix(
                              rowIndex,
                              columnIndex,
                              e.target.value,
                              "matrix2"
                            )
                          }
                        ></input>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="json-upload-form">
          <label htmlFor="jsonFile">Загрузить JSON файл:</label>
          <input type="file" id="jsonFile" accept=".json" />
        </div>

        <a href="/result" className="build-button">
          Построить дерево
        </a>
      </div>
    </div>
  );
};

export default DataEntryPage;
