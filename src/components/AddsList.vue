<template>
  <div>
    <div class="row m-auto p-3">
      <a class="btn btn-success btn-lg float-right text-center ml-auto">Add New</a>
    </div>
    <div class="container goods pt-3">
      <ul class="list-group">
          <li class="list-group-item">
          <div class="row">
            <div class="col-md-4">
              <img class="good_preview_photo" src="https://vodopad.ru/info/images/box.png" alt="Image">
            </div>
            <div class="col-md-6">
              <div class="row good-title">Name</div>
              <div class="row good-price">Price: 100</div>
              <div class="row good-description">Description</div>
              <hr>
              <div class="row"><span class="good-category text-muted">Category</span></div>
            </div>
            <div class="col-md-2">
              <br><br>
              <a class="btn btn-success btn-lg float-right text-center">More</a>
              <br><br>
              <a class="btn btn-success btn-lg float-right text-center" >Edit</a>
              <br><br>
              <button class="btn btn-success btn-lg float-right text-center">Delete</button>
              <br><br>
            </div>
          </div>
        </li>
      </ul>
      <div class="pagination_block">
        <button class="pagination prev">Previous</button>
        <button class="pagination next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddsList',
  data () {
    return {
      msg: 'Welcome to AddsList'
    }
  }
}
</script>

<style scoped>
.goods {
  margin-bottom: 100px;
}

.goods .list-group-item {
  border: 1px solid #2195d3 !important;
}

.good_preview_photo {
  height: 220px;
  width: 300px;
  margin: 20px;
}

.pagination_block {
  margin: 20px;
}

.pagination {
  height: 40px;
  width: 100px;
  background-color: #2195d3;
  color: white;
  border: none;
  text-align: center;
  display: block;
  float: left;
  margin: 10px;
  cursor: pointer;
  opacity: 0.7;
}

.pagination:hover {
  opacity: 1;
}

.prev {
  float: left;
}

.next {
  float: right;
}

.good-category {
  margin: 0 auto !important;
}

</style>
