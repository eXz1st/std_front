<template>
    <div>
    <div class="container p-5 inf-about-good">
      <div class="row">
        <div class="col-md-12">
         <div class="card rounded-0">
            <div class="card-header">
                <h3 class="mb-0">Editing add page</h3>
            </div>
            <div class="card-body">
                <div class="form" role="form" id="singleAdd">
                    <img class="good_photo" id="img" src="https://vodopad.ru/info/images/box.png" alt="Image">
                    <div class="form-group">
                        <label for="">Category</label>
                        <select name="" id="">
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Title</label>
                        <input type="text" class="form-control form-control-lg rounded-0" placeholder="Title" name="price" required="">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea name="description" class="form-control form-control-lg rounded-0" placeholder="Description" cols="30" rows="10"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Price</label>
                        <input type="text" class="form-control form-control-lg rounded-0" placeholder="Price" name="price" required="">
                    </div>
                    <div class="form-group">
                        <label for="">Published</label>
                        <input type="checkbox" id="checkbox" name="published">
                    </div>
                    <div class="form-group">
                      <label for="">Image</label>
                      <br>
                      <input type="file" name="image" accept="image/jpeg,image/png,image/gif">
                    </div>
                    <div class="form-group">
                      <button class="btn btn-success btn-lg">Save</button>
                      <button class="btn btn-danger btn-lg">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'AddForm',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.good_photo {
  height: 200px;
  width: 200px;
}
</style>
