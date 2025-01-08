import 'dart:js_interop';
import 'dart:math';

import 'package:web/web.dart' as web;

void main() {
  var htmlElements = HTMLElements();
  var sketchControl = SketchControl(htmlElements);
  sketchControl._createDivs(4);
  sketchControl._applyStyle(4);
}

class HTMLElements {
  web.Element? sketchContainer;
  web.Element? promptButton;
  web.Element? singleDiv;

  HTMLElements() {
    sketchContainer = web.document.querySelector('.container');
    promptButton = web.document.querySelector('.prompt');
  }
}

class SketchControl {
  final HTMLElements _view;
  int amountOfSquares = 0;

  SketchControl(this._view) {
    _attachEventListener();
  }

  void _attachEventListener() {
    _view.promptButton?.onClick.listen((_) {
      amountOfSquares = int.parse(
          web.window.prompt("Enter an amount of squares in the grid", "0") ??
              "0");
      if (amountOfSquares > 100) {
        web.window.alert("Please enter a number below 101");
      } else {
        amountOfSquares = amountOfSquares * amountOfSquares;
        _createDivs(amountOfSquares);
        _applyStyle(amountOfSquares);
      }
    });
  }

  void _createDivs(int amountOfSquares) {
    while (_view.sketchContainer?.firstChild is web.Node) {
      _view.sketchContainer!.removeChild(_view.sketchContainer!.lastChild!);
    }
    for (int i = 0; i < amountOfSquares; i++) {
      _view.singleDiv = web.document.createElement('div');
      _view.sketchContainer?.appendChild(_view.singleDiv as web.Node);
    }
  }

  void _applyStyle(amountOfSquares) {
    var sketchDivs = web.document.querySelectorAll('.container div');

    for (var i = 0; i < sketchDivs.length; i++) {
      web.Element element = sketchDivs.item(i) as web.Element;
      element
          .setAttribute('style', """display: flex; flex-grow: 1; flex-shrink:0; 
          flex-basis: ${100 ~/ pow(amountOfSquares, 1 / 2)}%""");
      element.onMouseOver.listen((event) {
        var target = event.currentTarget as web.Element;
        target.setAttribute('class', 'coloredDiv');
      });
      element.onMouseOut.listen((event) {
        var target = event.currentTarget as web.Element;
        target.setAttribute('class', 'nonColorDiv');
      });
    }
  }
}
