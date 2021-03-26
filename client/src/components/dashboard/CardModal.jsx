import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCard } from '../../actions/CardsActions';

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const card = useSelector((state) => state.cards).find((found) => found._id === id);
  useEffect(() => dispatch(fetchCard(id)), [dispatch, id]);

  if (!card) { return null; }

  // TODO: add card data dynamically
  return (
    <div id="modal-container">
      <div className="screen" />
      <div id="modal">
        <i className="x-icon icon close-modal" />
        <header>
          <i className="card-icon icon .close-modal" />
          <textarea className="list-title" style={{ height: '45px' }} defaultValue="Cards do many cool things. Click on this card to open it and learn more..." />
          <p>
            in list
            {' '}
            <a className="link">Stuff to try (this is a list)</a>
            <i className="sub-icon sm-icon" />
          </p>
        </header>
        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
                <li className="labels-section">
                  <h3>Labels</h3>
                  <div className="member-container">
                    <div className="green label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="yellow label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="orange label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="blue label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="purple label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="red label colorblindable" />
                  </div>
                  <div className="member-container">
                    <i className="plus-icon sm-icon" />
                  </div>
                </li>
                <li className="due-date-section">
                  <h3>Due Date</h3>
                  <div id="dueDateDisplay" className="overdue completed">
                    <input
                      id="dueDateCheckbox"
                      type="checkbox"
                      className="checkbox"
                      defaultChecked=""
                    />
                    Aug 4 at 10:42 AM
                    {' '}
                    <span>(past due)</span>
                  </div>
                </li>
              </ul>
              <form className="description">
                <p>Description</p>
                <span id="description-edit" className="link">
                  Edit
                </span>
                <p className="textarea-overlay">
                  Cards have a symbol to indicate if they contain a description.
                </p>
                <p id="description-edit-options" className="hidden">
                  You have unsaved edits on this field.
                  {' '}
                  <span className="link">View edits</span>
                  {' '}
                  -
                  {' '}
                  <span className="link">Discard</span>
                </p>
              </form>
            </li>
            <li className="comment-section">
              <h2 className="comment-icon icon">Add Comment</h2>
              <div>
                <div className="member-container">
                  <div className="card-member">TP</div>
                </div>
                <div className="comment">
                  <label>
                    <textarea
                      required=""
                      rows="1"
                      placeholder="Write a comment..."
                    />
                    <div>
                      <a className="light-button card-icon sm-icon" />
                      <a className="light-button smiley-icon sm-icon" />
                      <a className="light-button email-icon sm-icon" />
                      <a className="light-button attachment-icon sm-icon" />
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="button not-implemented"
                        value="Save"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </li>
            <li className="activity-section">
              <h2 className="activity-icon icon">Activity</h2>
              <ul className="horiz-list">
                <li className="not-implemented">Show Details</li>
              </ul>
              <ul className="modal-activity-list">
                <li>
                  <div className="member-container">
                    <div className="card-member">TP</div>
                  </div>
                  <h3>Taylor Peat</h3>
                  <div className="comment static-comment">
                    <span>The activities are not functional.</span>
                  </div>
                  <small>
                    22 minutes ago -
                    {' '}
                    <span className="link">Edit</span>
                    {' '}
                    -
                    {' '}
                    <span className="link">Delete</span>
                  </small>
                  <div className="comment">
                    <label>
                      <textarea required="" rows="1" defaultValue="The activities have not been implemented yet." />
                      <div>
                        <a className="light-button card-icon sm-icon" />
                        <a className="light-button smiley-icon sm-icon" />
                        <a className="light-button email-icon sm-icon" />
                      </div>
                      <div>
                        <p>You haven&apos;t typed anything!</p>
                        <input
                          type="submit"
                          className="button not-implemented"
                          value="Save"
                        />
                        <i className="x-icon icon" />
                      </div>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="member-container">
                    <div className="card-member small-size">VR</div>
                  </div>
                  <p>
                    <span className="member-name">Victor Reyes</span>
                    {' '}
                    changed the
                    background of this board
                    <small>yesterday at 4:53 PM</small>
                  </p>
                </li>
                <li className="activity-comment">
                  <div className="member-container">
                    <div className="card-member">VR</div>
                  </div>
                  <h3>Victor Reyes</h3>
                  <div className="comment static-comment">
                    <span>Example of a comment.</span>
                  </div>
                  <small>
                    22 minutes ago -
                    {' '}
                    <span className="link">Edit</span>
                    {' '}
                    -
                    {' '}
                    <span className="link">Delete</span>
                  </small>
                  <div className="comment">
                    <label>
                      <textarea required="" rows="1" defaultValue="Example of a comment." />
                      <div>
                        <a className="light-button card-icon sm-icon" />
                        <a className="light-button smiley-icon sm-icon" />
                        <a className="light-button email-icon sm-icon" />
                      </div>
                      <div>
                        <p>You haven&apos;t typed anything!</p>
                        <input
                          type="submit"
                          className="button not-implemented"
                          value="Save"
                        />
                        <i className="x-icon icon" />
                      </div>
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <aside className="modal-buttons">
          <h2>Add</h2>
          <ul>
            <li className="member-button">
              <i className="person-icon sm-icon" />
              Members
            </li>
            <li className="label-button">
              <i className="label-icon sm-icon" />
              Labels
            </li>
            <li className="checklist-button">
              <i className="checklist-icon sm-icon" />
              Checklist
            </li>
            <li className="date-button not-implemented">
              <i className="clock-icon sm-icon" />
              Due Date
            </li>
            <li className="attachment-button not-implemented">
              <i className="attachment-icon sm-icon" />
              Attachment
            </li>
          </ul>
          <h2>Actions</h2>
          <ul>
            <li className="move-button">
              <i className="forward-icon sm-icon" />
              Move
            </li>
            <li className="copy-button">
              <i className="card-icon sm-icon" />
              Copy
            </li>
            <li className="subscribe-button">
              <i className="sub-icon sm-icon" />
              Subscribe
              <i className="check-icon sm-icon" />
            </li>
            <hr />
            <li className="archive-button">
              <i className="file-icon sm-icon " />
              Archive
            </li>
          </ul>
          <ul className="light-list">
            <li className="not-implemented">Share and more...</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};
