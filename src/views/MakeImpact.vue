<template>
  <div class="make-an-impact container mt-5">
    <hr class="mb-4">
    <div class="row">
      <div class="col-md-12 d-flex">
        <h2>Make An Impact</h2>
        <a href="/" class="float-right ml-auto text-color--primary text-color--black">Go Back to Previous Page</a>
      </div>
    </div>
    <p class="text-size-3 mt-3">Sign up as your first step to partner with local leaders and communities in our fight against poverty.</p>

    <div class="row justify-content-start">
      <div class="col-6 mb-override--makeimpact">
        <form action="submit.prevent" class="mt-3">
          <div class="form-group">
            <label for="behalf" class="text-size-3">Applying on behalf of</label>
            <select name="behalf" class="form-control">
              <option value="" class="text-uppercase">MYSELF AS A DONOR</option>
            </select>
          </div>
          <div class="form-group">
            <label for="region" class="text-size-3">Region *</label>
            <select name="region" class="form-control">
              <option value="" class="text-uppercase">NATIONAL CAPITAL REGION (NCR)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="company" class="text-size-3">Company or Organization, if applicable</label>
            <p class="font-weight-bold text-size-2">Name of Company</p>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="honorific" class="text-size-3">Honorific *</label>
            <select name="region" class="form-control">
              <option value="" class="text-uppercase">ATTY.</option>
              <option value="" class="text-uppercase">DR.</option>
            </select>
          </div>
          <div class="form-group">
            <label for="fname" class="text-size-3">First Name *</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="lname" class="text-size-3">Last Name *</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="email" class="text-size-3">Email Address *</label>
            <input type="email" class="form-control">
          </div>
          <div class="form-group">
            <label for="mobile" class="text-size-3">Mobile Number *</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="survey" class="text-size-3">How did you learn about us? Kindly check all that apply.*</label>
            <div class="form-check" v-for="survey in surveys" :key="survey.name">
              <input type="checkbox" class="form-check-input">
              <label class="form-check-label text-size-2">{{ survey.name }}</label>
            </div>
            <div class="form-check d-flex">
              <input type="checkbox" class="form-check-input">
              <label class="form-check-label text-size-2">Others</label>
              <input type="text" class="form-control ml-2" placeholder="PLEASE SPECIFY">
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input">
              <label class="form-check-label text-size-2">I agree to the <a href="#" class="text-color--primary">Terms of Agreement.</a></label>
            </div>
            <button type="submit" class="btn btn-primary text-size-3 mt-4">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      surveys: [
        {
          name: 'I have participated in the Angat Buhay Bridging Leadership program'
        },
        {
          name: 'On the news'
        },
        {
          name: 'Referral'
        },
        {
          name: 'Online search'
        },
        {
          name: 'Social media post'
        }
      ]
    }
  }
}
</script>
