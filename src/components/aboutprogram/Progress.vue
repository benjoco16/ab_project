<template>
  <div>
    <h2 class="mb-5">Progress Tracker</h2>
    <table>
      <tr>
        <td class="pr-3"><h2>3</h2></td>
        <td>
          <p class="text-size-2 font-weight-bold mb-0">Total updates since <br> March 5, 2019</p>
        </td>
      </tr>
    </table>

    <ul class="vlist pt-5">
      <li v-for="n in 4">
        <div class="vlist-item">
          <p class="text-uppercase mb-0">April 20, 2019</p>
          <p class="text-size-2 font-weight-bold">Progress Update Header</p>
          <p class="font-weight-bold">By <span class="text-color--primary">Program Champion/Deputy Name</span></p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias alias tempore odio assumenda cumque aperiam voluptas sunt enim. Quasi amet velit exercitationem sunt ab, recusandae itaque laudantium eius soluta accusantium laborum provident similique sint totam consectetur dignissimos incidunt expedita quod.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.vlist {

  li {
    position:relative; /* so that pseudoelements are positioned relatively to their "li"s*/
    /* use padding-bottom instead of margin-bottom.*/
    margin-bottom: 0; /* This overrides previously specified margin-bottom */
    padding-bottom: 2.5em;
    list-style-type: none;
    margin-left: 3rem;

    &:after {
      position: absolute;
      left: -24px;
      top: 0px;
      content: '';
      height: 1.5rem;
      width: 1.5rem;
      background: #FF128D;
      border-radius: 50%;
    }

    &:before {
      /* lines */
      content:"";
      position: absolute;
      left: -13px; /* adjust manually */
      border-left: 3px dotted #AEAEAE;
      height: 100%;
      width: 1px;
    }

    &:first-child {

      &:before {
        top: 6px;
      }
    }

    &:last-child {

      &:before {
        height: 6px;
      }
    }
  }
}

.vlist-item {
  padding-left: 2rem;
}
</style>

