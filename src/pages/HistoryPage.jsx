import React from "react";
import "./HistoryPage.css";

const sampleHistoryData = [
  { date: "07.07.2023, 10:34:32", description: "Обнаружен электрический сбой" },
  { date: "10.12.2023, 17:13:54", description: "Выявлена проблема перегрева" },
  {
    date: "30.04.2024, 15:06:09",
    description: "Обнаружено аномальное напряжение",
  },
  {
    date: new Date().toLocaleString(),
    description: "Выявлена проблема перегрева",
  },
];

const HistoryPage = () => {
  const downloadAsJson = (data) => {
    const filename = "history-data.json";
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = filename;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="history-container">
      <header>
        <h1>Ваша история диагностики</h1>
        <p>Просмотрите список ваших предыдущих запросов и результатов:</p>
      </header>

      <div className="history-list">
        <table>
          <thead>
            <tr>
              <th>Дата обработки</th>
              <th>Описание проблемы</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {sampleHistoryData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.description}</td>
                <td>
                  <button
                    className="download-button-history"
                    onClick={() => downloadAsJson([entry])}
                  >
                    Скачать
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
