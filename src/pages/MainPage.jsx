// MainPage.jsx
import React from "react";
import "./MainPage.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const MainPage = () => {
  const chartData = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"],
    datasets: [
      {
        label: "Выявлено ошибок",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="main-container">
      <header>
        <h1 className="title">Диагностика неисправностей оборудования</h1>
      </header>
      <section>
        <div className="description">
          <h2>О проекте</h2>
          <p>
            Облегчении и оптимизации процесса диагностики и поиска причин
            неисправностей в сложном оборудовании. Традиционная диагностика
            неисправностей может быть сложной и трудоемкой задачей, особенно при
            работе с сложными системами и множеством возможных причин проблемы.
          </p>
          <p>
            Основная идея этого веб-сайта заключается в том, чтобы предоставить
            пользователям возможность систематически и последовательно
            исследовать и анализировать причины и следствия неисправностей,
            применяя метод построения дерева причино-следственных связей, а
            также предсказывать когда и из-за чего это произойдет, что позволит
            своевременно устранить неполадки и выхода системы из строя.
          </p>
        </div>

        <div className="image-carousel-container">
          <h2>Традиционная диагностика</h2>
          <div className="image-carousel">
            <img
              src="equipment_diagnostics.png"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37a2a3eb16fd4084bafc19347c68fbd6562a74fecbe85be92f891c0105b0e9cc?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37a2a3eb16fd4084bafc19347c68fbd6562a74fecbe85be92f891c0105b0e9cc?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37a2a3eb16fd4084bafc19347c68fbd6562a74fecbe85be92f891c0105b0e9cc?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37a2a3eb16fd4084bafc19347c68fbd6562a74fecbe85be92f891c0105b0e9cc?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37a2a3eb16fd4084bafc19347c68fbd6562a74fecbe85be92f891c0105b0e9cc?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37a2a3eb16fd4084bafc19347c68fbd6562a74fecbe85be92f891c0105b0e9cc?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37a2a3eb16fd4084bafc19347c68fbd6562a74fecbe85be92f891c0105b0e9cc?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37a2a3eb16fd4084bafc19347c68fbd6562a74fecbe85be92f891c0105b0e9cc?apiKey=04f22dd2d13640df94ab71918e8ea2a3&"
              className="image1"
            />
            <img
              src="equipment_diagnostics (1).png"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/42fea4f0680dd267d1afdd93f6c714f08ec5b514b977b8489c9bf2f5675709b7?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fea4f0680dd267d1afdd93f6c714f08ec5b514b977b8489c9bf2f5675709b7?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fea4f0680dd267d1afdd93f6c714f08ec5b514b977b8489c9bf2f5675709b7?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fea4f0680dd267d1afdd93f6c714f08ec5b514b977b8489c9bf2f5675709b7?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fea4f0680dd267d1afdd93f6c714f08ec5b514b977b8489c9bf2f5675709b7?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fea4f0680dd267d1afdd93f6c714f08ec5b514b977b8489c9bf2f5675709b7?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fea4f0680dd267d1afdd93f6c714f08ec5b514b977b8489c9bf2f5675709b7?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fea4f0680dd267d1afdd93f6c714f08ec5b514b977b8489c9bf2f5675709b7?apiKey=04f22dd2d13640df94ab71918e8ea2a3&"
              className="image2"
            />
            <img
              src="equipment_diagnostics (2).png"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ead21f53be99f8c55020d240e8087df05ed36b85b5a99c1baeb5a9ea42e8891e?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ead21f53be99f8c55020d240e8087df05ed36b85b5a99c1baeb5a9ea42e8891e?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ead21f53be99f8c55020d240e8087df05ed36b85b5a99c1baeb5a9ea42e8891e?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ead21f53be99f8c55020d240e8087df05ed36b85b5a99c1baeb5a9ea42e8891e?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ead21f53be99f8c55020d240e8087df05ed36b85b5a99c1baeb5a9ea42e8891e?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ead21f53be99f8c55020d240e8087df05ed36b85b5a99c1baeb5a9ea42e8891e?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ead21f53be99f8c55020d240e8087df05ed36b85b5a99c1baeb5a9ea42e8891e?apiKey=04f22dd2d13640df94ab71918e8ea2a3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ead21f53be99f8c55020d240e8087df05ed36b85b5a99c1baeb5a9ea42e8891e?apiKey=04f22dd2d13640df94ab71918e8ea2a3&"
              className="image3"
            />
          </div>
        </div>

        <div className="instructions">
          <h2>Инструкция по использованию сайта</h2>
          <ul>
            <li>
              Шаг 1: Зарегистируйтесь на сайте, чтобы предоставить фунцкионал
              нашего продукта
            </li>
            <li>
              Шаг 2: Предоставьте данные или загрузите готовый Json файл, в нашу
              систему для диагностики проблемы
            </li>
            <li>
              Шаг 3: Просмотрите рекомендации и сформированное дерево ошибок на
              основе ваших данных
            </li>
            <li>
              Шаг 4: Скачайте дерево ошибок, а также вы можете просмотреть ваши
              предыдущие результаты
            </li>
          </ul>
        </div>
        <div className="chart-container">
          <h2>Количество ошибок, которые мы выявили у пользователей</h2>
          <Bar data={chartData} />
        </div>
      </section>
      <a href="/upload" className="diagnostic-button">
        Перейти к диагностике
      </a>
    </div>
  );
};

export default MainPage;
