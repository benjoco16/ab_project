<template>
  <div>
    <h2>Our Plan of Action</h2>
    <p class="text-size-3 font-weight-bold mb-0">Strategy</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, dolorem quia. Exercitationem, praesentium! Sit sunt saepe impedit officia repellendus ratione debitis! Necessitatibus eius quaerat error dolores alias dolore ipsam earum eveniet veritatis quibusdam? Ab commodi alias quae repudiandae, voluptatum velit obcaecati nesciunt iure aperiam quam nulla tenetur. Nulla, sint nisi.</p>
    <p>Our strategy will consist of the following:</p>
    <table class="orderedlist-container">
      <tr v-for="n in 3">
        <td>
          <div class="counter">
            1
          </div>
        </td>
        <td>
          <p class="text-size-3 font-weight-bold mb-0">Name of Component</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nesciunt. Aspernatur provident aperiam vitae dolore rem fugiat saepe et placeat accusamus odio. Reprehenderit perspiciatis incidunt quas iste odio autem voluptatum cumque, eligendi rerum atque doloribus, asperiores inventore! Impedit, molestiae quod!
          </p>
          <div class="progress w-75 mb-3">
            <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-secondary-default" role="progressbar" style="width: 25%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="text-size-3 font-weight-bold mb-0 text-color--primary">Program Champion</p>
          <p class="text-size-3 font-weight-bold text-color--primary">25%: 75,000</p>

          <p class="text-size-3 font-weight-bold mb-0 text-color--teal">Partner 1</p>
          <p class="text-size-3 font-weight-bold text-color--teal">25%: 75,000</p>

          <button class="btn btn-primary">Pledge</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
 .custom-list-counter {
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    counter-increment: step-counter;
    margin-bottom: 5px;

    &:before {
      content: counter(step-counter);
      margin-right: 20px;
      background-color: rgb(180, 180, 180);
      color: white;
      font-weight: bold;
      padding: 8px 12px;
    }
  }
 }

 .orderedlist-container {

    td {
      vertical-align: top;
      padding-bottom: 3rem;

      &:first-of-type {
        padding-right: 2rem;
      }
    }
 }

 .counter {
  background: grey;
  color: white;
  padding: 0.5rem 1rem;
 }
</style>

