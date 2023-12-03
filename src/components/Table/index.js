import React, { useEffect, useState } from "react";

// styles
import "./style.css";

// child components
import Modal from "../_common/Modal";

function Table() {
  const [userData, setUserData] = useState({
    loader: false,
    data: [],
    error: "",
  });
  const [modalConfig, setModalConfig] = useState({
    status: false,
    config: { name: "abc", index: 0, row_number: 3 },
    action_type: "",
  });

  useEffect(() => {
    setUserData({
      loader: true,
      data: [],
      error: "",
    });

    fetch("https://assets.alippo.com/catalog/static/data.json")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.length > 0) {
          setUserData({
            ...userData,
            loader: false,
            data: res,
          });
        }
      })
      .catch((err) => {
        setUserData({
          ...userData,
          loader: false,
          error: "Something went wrong while fetching data. Please try again.",
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * to set default state for modalConfig
   */
  const resetModal = () => {
    setModalConfig({
      status: false,
      config: null,
      action_type: "",
    });
  };

  /**
   * to update new name in userData
   *
   * @param {String} new_name
   * @param {Number} index
   */
  const updateName = (new_name, index) => {
    let updateData = [...userData.data];
    updateData[index]["name"] = new_name;
    setUserData({ ...userData, data: updateData });

    resetModal();
  };

  /**
   * to delete a row
   *
   * @param {Number} row_number
   */
  const deleteRow = (row_number) => {
    let updateData = [...userData.data];
    updateData = updateData.filter((_, index) => index + 1 !== row_number);
    setUserData({ ...userData, data: updateData });

    resetModal();
  };

  return (
    <div className="table-data-diplay-section">
      <div className="display-table-container">
        {userData.loader ? (
          "Fetching data..."
        ) : userData.error ? (
          <div className="error">{userData.error}</div>
        ) : userData.data.length === 0 ? (
          "Data not available."
        ) : (
          <table>
            <thead>
              <tr>
                <th style={{ width: "10%" }} className="primary-heading">
                  SL No.
                </th>
                <th style={{ width: "20%" }} className="primary-heading">
                  Name
                </th>
                <th style={{ width: "10%" }} className="primary-heading">
                  Age
                </th>
                <th style={{ width: "20%" }} className="primary-heading">
                  City
                </th>
                <th style={{ width: "15%" }} className="primary-heading">
                  Pin Code
                </th>
                <th className="primary-heading">Actions</th>
              </tr>
            </thead>

            <tbody>
              {userData.data.map((data_item, index) => (
                <tr key={index}>
                  <td className="primary-text" style={{ width: "10%" }}>
                    {index + 1}
                  </td>
                  <td className="primary-text" style={{ width: "20%" }}>
                    {data_item.name || "-"}
                  </td>
                  <td className="primary-text" style={{ width: "10%" }}>
                    {data_item.age || "-"}
                  </td>
                  <td className="primary-text" style={{ width: "20%" }}>
                    {data_item.city || "-"}
                  </td>
                  <td className="primary-text" style={{ width: "15%" }}>
                    {data_item.pinCode || "-"}
                  </td>
                  <td>
                    <div className="action-btns">
                      <button
                        className="btn edit capitalize"
                        onClick={() =>
                          setModalConfig({
                            status: true,
                            config: {
                              name: data_item.name || "-",
                              index: index,
                            },
                            action_type: "edit",
                          })
                        }
                      >
                        edit
                      </button>
                      <button
                        className="btn delete capitalize"
                        onClick={() =>
                          setModalConfig({
                            status: true,
                            config: {
                              row_number: index + 1,
                            },
                            action_type: "delete",
                          })
                        }
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {modalConfig.status && (
        <Modal
          modalConfig={modalConfig}
          resetModal={resetModal}
          updateName={updateName}
          deleteRow={deleteRow}
        />
      )}
    </div>
  );
}

export default Table;
