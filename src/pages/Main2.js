import React, { Component } from "react"


class Main2 extends React.Component{
    render(){
        return(
            <div>
                 <div class="container-fluid">
    <button class="btn btn-primary" type="submit">Add Selected items to Cart</button>
      <div class="search-container">
       <p>Search:<input type="text" name="search"/></p>
      </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>COLOR</th>
          <th>PRICE</th>
          <th>BUY</th>
        </tr>
      </thead>
      <tbody>
        <tr>

          <td><img src="assets/Images/iphone.jpg" alt="Apple Iphone" width="100" height="132"/></td>
          <td>iPhone</td>
          <td>Red</td>
          <td>$1000</td>
          <td>
            <div class="col-xs-2">
              <input class="form-control" type="text" placeholder="1"/>
            </div>
            <button type="button" class="btn btn-outline-primary">Add to Cart</button>
            <input class="checkbox" type="checkbox" value=""/>
          </td>
        </tr>
        <tr>

          <td><img src="assets/Images/samsung.jpg" alt="Samsung" width="100" height="132"/></td>
          <td>Samsung</td>
          <td>Prism Blue Crush</td>
          <td>$900</td>

          <td>
            <div class="col-xs-2">
              <input class="form-control" type="text" placeholder="1"/>
            </div>
            <button type="button" class="btn btn-outline-primary">Add to Cart</button>
            <input class="checkbox" type="checkbox" value=""/>
          </td>

        </tr>
        <tr>

          <td><img src="assets/Images/Huawei.jpg" alt="Huawei" width="100" height="132"/></td>
          <td>Huawei</td>
          <td>Aurora Blue</td>
          <td>$700</td>


          <td>
            <div class="col-xs-2">
              <input class="form-control" type="text" placeholder="1"/>
            </div>
            <button type="button" class="btn btn-outline-primary">Add to Cart</button>
            <input class="checkbox" type="checkbox" value=""/>
          </td>

        </tr>
        <tr>

          <td><img src="assets/Images/BlackBerry.jpg" alt="BlackBerry" width="100" height="132"/></td>
          <td>BlackBerry</td>
          <td>Champagne</td>
          <td>$600</td>

          <td>
            <div class="col-xs-2">
              <input class="form-control" type="text" placeholder="1"/>
            </div>
            <button type="button" class="btn btn-outline-primary">Add to Cart</button>
            <input class="checkbox" type="checkbox" value=""/>
          </td>

        </tr>
        <tr>

          <td><img src="assets/Images/Nokia.jpg" alt="Nokia" width="100" height="132"/></td>
          <td>Nokia</td>
          <td>Polar Night</td>
          <td>$800</td>

          <td>
            <div class="col-xs-2">
              <input class="form-control" type="text" placeholder="1"/>
            </div>
            <button type="button" class="btn btn-outline-primary">Add to Cart</button>
            <input class="checkbox" type="checkbox" value=""/>
          </td>

        </tr>

      </tbody>
    </table>
  </div>
            </div>
        )
    }
}
export default Main2