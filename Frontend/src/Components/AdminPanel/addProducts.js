import React from 'react'
import "./AddProducts.css"
const AddProducts = () => {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <script src="https://kit.fontawesome.com/3da5cff3a5.js" crossorigin="anonymous"></script>

   <nav class="navbar navbar-expand navbar-light bg-light">
     <div class="container-sm">
          <a class="navbar-brand" href="#">product Panel </a>
          <div class="navcontent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
              <li class="nav-item border border-2 ps-3 pe-3">
                <a class="nav-link active fs-4" aria-current="page" href="#">Add Products</a>
              </li>
              <li class="nav-item border border-2 ps-3 pe-3">
                <a class="nav-link active fs-4 " aria-current="page" href="#">Update Products</a>
              </li>
              <li class="nav-item border border-2 ps-3 pe-3">
                <a class="nav-link active fs-4 " href="#" tabindex="-1" aria-disabled="true">Database</a>
              </li>
             
            </ul>
        </div>
        <button class="btn btn-success ps-5 pe-5 pt-2 pb-2" onclick="quit()">Quit</button>
        </div>
      </nav>

<div class="container w-50 border mt-5 " id="form">
      <form class="mt-5">
        <div class="mb-3">
          <label for="UrunID" class="form-label">Product ID</label>
          <input type="text" class="form-control" id="UrunID" aria-describedby="" required/>
        </div>
        <div class="mb-3">
          <label for="UrunAdi" class="form-label">Product Name</label>
          <input type="text" class="form-control" id="UrunAdi" required/>
        </div>
        <div class="mb-3">
          <label class="form-label" for="UrunMiktar">Stock Quantity</label>
          <input type="number" class="form-control" id="UrunMiktar" required/>
        </div>
        <div class="mb-3">
            <label for="Kategori" class="form-label">Product Category</label>
            <select name="Kategori" id="Kategori" class="ms-1 d-block w-100" required>
                <option></option>
                <option value="Elektronik">Electronics</option>
                <option value="Giyim">Fashion</option>
                <option value="Kirtasiye">Paper Work</option>
                <option value="Yiyecek">Food</option>
                <option value="DijitalUrun">Digital (Code etc.)</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="UrunImage" class="form-label">Product Image</label>
            <input type="file" class="form-control" name="UrunImage" id="UrunImage"/>
        </div>
        <div class=" mt-4">
            <label for="reminder" class="form-check-label">Send e-mail when stock runs out</label>
            <input type="checkbox" class="form-check-input" name="reminder"/>
        </div>
        <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-success text-white btn-outline-success form-control w-50 m-3" id="ekleButton">Add Stock</button>
        </div>
      </form>
  </div>
<script src="scripts.js"></script>

    </div>
  )
}

export default AddProducts
