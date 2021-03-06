import React from 'react'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import NavMenu from '../NavMenu'
import styles from './view.inject'
import counterstyles from '../../stylesheets/CounterForm'
import commentStyles from '../../stylesheets/CommentForm'
import RaisedButton from 'material-ui/RaisedButton'

const Comment = ({ author, children }) =>
  <div className={commentStyles['comment-entry']}>
    <div className={commentStyles['comment-list-author']}>
      {author}
    </div>
    <div>
      {children}
    </div>
  </div>

const MultiPartitionForm = ({fixedValue, counter, items, increment}) =>
  <div>
    <AppBar
      title='One react component has access to data and/or operations from multiple partitions.'
      iconElementLeft={<NavMenu useHome={'useHome'} />}
    />
    <Paper zDepth={4}>
      <div className={styles.TextTitle}>The fixed value below is from this partition.</div>
      <div id='counter-text' className={counterstyles['counter-text']}>{`The fixed value is ${fixedValue}.`}</div>
      <div className={styles.TextTitle}>The counter value below is from the counterFormPartition.</div>
      <div id='counter-text' className={counterstyles['counter-text']}>{`The current counter is ${counter}.`}</div>
      <div className={styles.increment}><RaisedButton primary={true} label='Increment' onClick={increment} /></div>
      <p className={styles.TextTitle}>The list below is from the commentBoxPartition.</p>
      <div className={commentStyles['comment-form-list-container']}>
        <div className={commentStyles['comment-text']}>Comments</div>
        <div className={commentStyles['comment-form-list']}>
          {items.map((comment) =>
            <Comment author={comment.author} key={comment.id} >
              {`id: ${comment.id}, ${comment.text}`}
            </Comment>
          )}
        </div>
      </div>
    </Paper>
  </div>

export default MultiPartitionForm
