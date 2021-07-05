import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import Loading from "./components/Loading";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { handleFetchData } from "./store/actions/common.action";

function App(props) {
  const { loading, dispatch } = props;

  useEffect(() => {
    dispatch(handleFetchData());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Todos />
          <Goals />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
