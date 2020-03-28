import React, { Fragment, useContext } from "react";
import RoomContext from "../Context";
import { Title } from "./Title";

export const RoomFilter = props => {
  const { handleChange, filterData } = useContext(RoomContext);

  let types = ["All", ...[...new Set(props.rooms.map(item => item.type))]];
  let capacity = props.rooms.map(item => item.capacity);

  const renderRoomFilter = () => {
    return (
      <div className="filter-container">
        <Title title="search rooms" />
        {renderForm()}
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form className="filter-form">
        <select
          onChange={handleChange}
          value={filterData.type}
          name="type"
          className="form-control"
        >
          {types.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          onChange={handleChange}
          value={filterData.capacity}
          name="capacity"
          className="form-control"
        >
          {capacity.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>

        <label htmlFor="price">Price ${filterData.price}</label>
        <input
          type="range"
          className="form-control"
          value={filterData.price}
          min={filterData.minPrice}
          max={filterData.maxPrice}
          onChange={handleChange}
          name="price"
        />

        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-input">
            <input
              type="number"
              name="minSize"
              onChange={handleChange}
              id="minsize"
              value={filterData.minSize}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              onChange={handleChange}
              id="maxsize"
              value={filterData.maxSize}
              className="size-input"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={filterData.breakfast}
              name="breakfast"
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={filterData.pets}
              name="pets"
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    );
  };
  return (
    <Fragment>
      <div>{renderRoomFilter()}</div>
    </Fragment>
  );
};
