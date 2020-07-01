import { connect } from 'react-redux';

import Menu from '../components/menu';

import { toggleMenu } from '../actions/menu';

const mapStateToProps = (state) => ({
  isOpen: state.menu.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (isOpen) => {
    dispatch(toggleMenu(isOpen));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
