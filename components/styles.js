let style = {

  container: {
    position: 'relative',
    fontSize: '80%',
    fontWeight: 300,
    padding: '10px 0',
    width: '95%',
    margin: '0 auto'
  },
  containerBefore: {
    content: '',
    position: 'absolute',
    top: 0,
    left: 18,
    height: '100%',
    width: 2,
    background: '#a0b2b8'
  },
  containerAfter: {
    content: '',
    display: 'table',
    clear: 'both'
  },

  event: {
    position: 'relative',
    margin: '10px 0',
    paddingLeft: 45
  },
  eventAfter: {
    clear: 'both',
    content: '',
    display: 'table'
  },
  eventType: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    width: 40,
    height: 40,
    marginLeft: -2,
    background: '#e9f0f5',
    border: '2px solid #6fba1c'
  },
  materialIcons: {
    display: 'block',
    width: 18,
    height: 18,
    position: 'relative',
    left: '50%',
    top: '50%',
    marginLeft: -18,
    marginTop: -18
  },
  eventContent: {
    position: 'relative'
  },
  eventContentBefore: {
    top: 24,
    left: '100%',
    borderColor: 'transparent',
    borderLeftColor: '#ffffff'
  },
  time: {
    color: '#303e49',
    marginBottom: 3
  },
  message: {
    width: '98%',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginTop: '1em',
    marginBottom: '1em',
    lineHeight: 1.6,
    padding: '0.5em 1em'
  },
  messageAfter: {
    clear: 'both',
    content: '',
    display: 'table'
  },
  title: {
    float: 'left'
  },
  actionButtons: {
    float: 'right',
    textAlign: 'right'
  }

}

export default style
