'use strict';


const arr_checkbox = Array.from(document.querySelectorAll('input.interest__check'));

function setActiveChildrenElement(element) {
  if (element.checked) {
    let li = element.closest('li');
    let arr_input = Array.from(li.querySelectorAll('input.interest__check'));
    arr_input.forEach(item => {
      item.checked = true;
      item.indeterminate = false;
    });
  } else if (!element.checked) {
    let li = element.closest('li');
    let arr_input = Array.from(li.querySelectorAll('input.interest__check'));
    arr_input.forEach(item => {
      item.checked = false;
      item.indeterminate = false;
    });
  }
}

function testSiblingElements(element) {
  let bool1 = false;
  let bool2 = false;
  let bool3 = false;
  let ul = element.closest('ul');
  let arr_li = Array.from(ul.children);
  let arr_input = [];

  arr_li.forEach(item => {
    arr_input.push(item.querySelector('input.interest__check'));
  });

  arr_input.forEach(item => {
    if (!item.checked) {
      bool1 = true;
    }
    if (item.checked) {
      bool2 = true;
    }
    if (item.indeterminate) {
      bool3 = true;
    }
  });

  return [bool1, bool2, bool3];
}

function resTestCheck(element) {
  let arr_bool = testSiblingElements(element);
  if (arr_bool[0] && arr_bool[1]) {
    if (element.closest('ul').closest('li') !== null) {
      if (element.closest('ul').closest('li').querySelector('input.interest__check').checked) {
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = false;
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = true;
      } else if (element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate) {

      } else {
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = true;
      }
    }
  } else if (arr_bool[0]) {
    if (element.closest('ul').closest('li') !== null) {
      if (element.closest('ul').closest('li').querySelector('input.interest__check').checked) {
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = false;
      } else if (element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate) {
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = false;
      }
    }
  } else if (arr_bool[1]) {
    if (element.closest('ul').closest('li') !== null) {
      if (element.closest('ul').closest('li').querySelector('input.interest__check').checked) {

      } else if (element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate) {
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = false;
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = true;
      } else {
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = true;
      }
    }
  } else {
    console.error('Error1');
  }
}

function resTestIndeterm(element) {
  let arr_bool = testSiblingElements(element);
  if (arr_bool[2]) {
    if (element.closest('ul').closest('li') !== null) {
      if (element.closest('ul').closest('li').querySelector('input.interest__check').checked) {
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = false;
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = true;
      } else if (element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate) {

      } else {
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = true;
      }
    }
  }
}

arr_checkbox.forEach(item => {
  item.addEventListener('change', () => {
    setActiveChildrenElement(item);

    arr_checkbox.forEach(it => {
      resTestCheck(it);
      resTestIndeterm(it);
    });
  });
});
























/*
function setActiveChildrenElement(element) {
  let li = element.closest('li');
  let arr_input = Array.from(li.querySelectorAll('input.interest__check'));
  arr_input.forEach(item => {
    item.checked = true
  });
}

function testSiblingElements(element) {
  let bool1 = false;
  let bool2 = false;
  let bool3 = false;
  let bool4 = false;
  let ul = element.closest('ul');
  let arr_li = Array.from(ul.children);
  let arr_input = [];

  arr_li.forEach(item => {
    arr_input.push(item.querySelector('input.interest__check'));
  });

  arr_input.forEach((item, i) => {
    if (!item.checked) {
      bool1 = true;
    }
  });

  arr_input.forEach((item, i) => {
    if (item.checked) {
      bool2 = true;
    }
  });

  arr_input.forEach((item, i) => {
    if (!item.indeterminate) {
      bool3 = true;
    }
  });

  arr_input.forEach((item, i) => {
    if (item.indeterminate) {
      bool4 = true;
    }
  });


  console.log([bool1, bool2]);
  return [bool1, bool2];
}

function resTest(element) {
  let arr_bool = testSiblingElements(element);
  if (arr_bool[0] && arr_bool[0]) {
    if (element.closest('ul').closest('li') !== null) {
      if (element.closest('ul').closest('li').querySelector('input.interest__check').checked) {
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = false;
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = true;
      } else if (element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate) {

      } else {

      }
      resTest(element.closest('ul').closest('li').querySelector('input.interest__check'));
    } else {

    }
  } else if (!arr_bool[1]) {
    if (element.closest('ul').closest('li') !== null) {
      if (element.closest('ul').closest('li').querySelector('input.interest__check').checked) {
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = false;
      } else if (element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate) {
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = false;
      } else {

      }
      resTest(element.closest('ul').closest('li').querySelector('input.interest__check'));
    } else {

    }
  } else if (!arr_bool[0]) {
    if (element.closest('ul').closest('li') !== null) {
      if (element.closest('ul').closest('li').querySelector('input.interest__check').checked) {

      } else if (element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate) {
        element.closest('ul').closest('li').querySelector('input.interest__check').indeterminate = false;
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = true;
      } else {
        element.closest('ul').closest('li').querySelector('input.interest__check').checked = true;
      }
      resTest(element.closest('ul').closest('li').querySelector('input.interest__check'));
    } else {

    }
  } else {
    console.error('Error1');
  }

}



function assembly(element) {
  setActiveChildrenElement(element);
  resTest(element);
}



arr_checkbox.forEach(item => {

  item.addEventListener('change', () => {
    if (item.checked) {
      assembly(item);
    } else if (item.indeterminate) {

    } else {
      assembly(item);
    }

  });
});
*/
