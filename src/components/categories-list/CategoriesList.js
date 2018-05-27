import React from "react";
import { connect } from "react-redux";
import { hashHistory } from "react-router";
import { bindActionCreators } from "redux";
import * as categoriesActions from "../../actions/categoriesActions";
import * as productsActions from "../../actions/productsActions";
import PropTypes from "prop-types";

import { Layout, Menu, Breadcrumb, Icon, Input, BackTop } from "antd";
const { SubMenu } = Menu;
const Search = Input.Search;
const { Header, Content, Footer, Sider } = Layout;

class CategoriesList extends React.Component {
  componentWillMount() {
    this.props.categoriesActions.fetchCategories();
    this.props.productsActions.fetchProducts();
  }

  handleClickCategories = e => {
    console.log(
      "this is:",
      e.target.innerHTML.replace(/\s/g, "-").toLowerCase()
    );

    let categorySelected = e.target.innerHTML.replace(/\s/g, "-").toLowerCase();
    // Replace spaces by "-" + lowercase letters:
    categorySelected = categorySelected.replace(/\s/g, "-").toLowerCase();
    hashHistory.push(`/${categorySelected}`);

    // Transform URL to Array
    const pathArray = window.location.href.split("/");

    // Get the last URL element
    const lastLevelLocation = pathArray[4];
    console.log("coco lastLevelLocation " + lastLevelLocation);

    if (categorySelected === lastLevelLocation) {
      console.log("match! URL");
      e.target.style.fontWeight = "bold";
    }
    else {
      e.target.style.fontWeight = "";
    }

    let filter, ul, li, h3, i;
    filter = e.target.innerHTML.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      h3 = li[i].getElementsByTagName("h3")[0];
      if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      }
      else {
        li[i].style.display = "none";
      }
    }
  };

  filterProducts = () => {
    let input, filter, ul, li, h3, i;
    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();

    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      h3 = li[i].getElementsByTagName("h3")[0];
      if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      }
      else {
        li[i].style.display = "none";
      }
    }
  };

  render() {

    if (!this.props.categories) {
      return <div><Icon type="loading" /></div>;
    }
    else {
      return (
        <Layout className="layout">
          <Header className="header">
            <div className="layout__logo">
              <Icon type="github" className="layout__logo-link-github" />
            </div>
          </Header>
          <Content style={{ padding: "0 180px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>Categories</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
              <Sider width={200} style={{ background: "#fff" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="database" />Categories
                      </span>
                    }
                  >
                    {this.props.categories.map((item, index) => {
                      return (
                        <Menu.Item key={item.id}>
                          <button 
                              className="layout__button" 
                              onClick={this.handleClickCategories}
                            >
                            {item.title}
                          </button>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <h1>Products</h1>
                <Search
                  placeholder="Filter For Products"
                  onSearch={value => this.filterProducts(value)}
                  enterButton
                  id="myInput"
                />

                <h2>List of Products</h2>
                <ul id="myUL">
                  {this.props.products.map((items, i) => {
                    return (
                      <li key={items.id}>
                        <h3> {items.title} </h3>
                        <p> {items.description} </p>
                      </li>
                    );
                  })}
                </ul>
                <BackTop />
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>Made with ♥ by <a href="www.pycolors.com">Py Colors</a></Footer>
        </Layout>
      );
    }
  }
}

CategoriesList.PropTypes = {
  categoriesActions: PropTypes.object.isRequered,
  categories: PropTypes.array.isRequered,
  productsActions: PropTypes.object.isRequered,
  products: PropTypes.array.isRequered
};

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  categoriesActions: bindActionCreators(categoriesActions, dispatch),
  productsActions: bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
