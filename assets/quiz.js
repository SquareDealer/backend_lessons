// teachify — reusable inline quiz with immediate feedback.
// Markup:
// <form class="quiz" data-quiz>
//   <h2>Самопроверка</h2>
//   <div class="quiz-q" data-answer="b" data-explain="Почему b верно…">
//     <p>1. Вопрос?</p>
//     <label><input type="radio" name="q1" value="a"> вариант</label>
//     <label><input type="radio" name="q1" value="b"> вариант</label>
//     <div class="quiz-feedback"></div>
//   </div>
//   <p class="quiz-score"></p>
// </form>
// <script src="../../assets/quiz.js"></script>

(function () {
  document.querySelectorAll('[data-quiz]').forEach(function (quiz) {
    var questions = quiz.querySelectorAll('.quiz-q');
    var score = quiz.querySelector('.quiz-score');

    function update() {
      var answered = 0;
      var correct = 0;
      questions.forEach(function (q) {
        var picked = q.querySelector('input:checked');
        if (!picked) return;
        answered += 1;
        if (picked.value === q.dataset.answer) correct += 1;
      });
      if (score) {
        score.textContent = answered === questions.length
          ? 'Итог: ' + correct + ' из ' + questions.length
          : '';
      }
    }

    questions.forEach(function (q) {
      q.addEventListener('change', function (event) {
        var input = event.target;
        if (!input.matches('input[type="radio"]')) return;
        var ok = input.value === q.dataset.answer;
        q.querySelectorAll('label').forEach(function (label) {
          label.classList.remove('correct', 'wrong');
        });
        input.closest('label').classList.add(ok ? 'correct' : 'wrong');
        var feedback = q.querySelector('.quiz-feedback');
        if (feedback) {
          feedback.textContent = (ok ? 'Верно. ' : 'Неверно. ') + (q.dataset.explain || '');
        }
        update();
      });
    });
  });
})();
