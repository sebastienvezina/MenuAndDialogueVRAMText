const id = "MENUDIALOGVRAMTEXT";
const groups = ["EVENT_GROUP_DIALOGUE"];
const name = "Menu or Dialogue from VRAM Tileset Text";

const MAX_OPTIONS = 16;

const wrap8Bit = (val) => (256 + (val % 256)) % 256;

const decOct = (dec) => wrap8Bit(dec).toString(8).padStart(3, "0");

const fields = [].concat(
  [
    {
      key: "__scriptTabs",
      type: "tabs",
      defaultValue: "layout",
      values: {
        layout: "Layout",
        menu: "Menu",
        dialogue: "Dialogue",

      },

    },
  ],
  // Layout tab
  [
    {
      key: `menuordialogue`,
      label: "Menu or Dialogue",
      type: "select",
      options: [
        ["menu", "Menu"],
        ["dialogue", "Dialogue"],
      ],
      defaultValue: "menu",
      flexBasis: "100%",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
    {
      key: `boxWidth`,
      label: "Box Width (tiles)",
      type: "number",
      min: 1,
      max: 20,
      width: "50%",
      defaultValue: 20,
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },

      ],
    },
    {
      key: `boxHeight`,
      label: "Box Height (tiles)",
      type: "number",
      min: 1,
      max: 18,
      width: "50%",
      defaultValue: 5,
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
    {
      type: "break",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },

      ],
    },
    {
      key: `boxX`,
      label: "Box X pos (tiles)",
      type: "number",
      min: 1,
      max: 20,
      width: "50%",
      defaultValue: 4,
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
    {
      key: `boxY`,
      label: "Box Y pos (tiles)",
      type: "number",
      min: 1,
      max: 18,
      width: "50%",
      defaultValue: 6,
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
    {
      type: "break",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },

      ],
    },
    {
      key: `showBorder`,
      label: "Show Border",
      type: "checkbox",
      defaultValue: true,
      width: "50%",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
    {
      key: `clearPrevious`,
      label: "Clear Previous Content",
      type: "checkbox",
      defaultValue: true,
      width: "50%",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
    {
      key: `showActors`,
      label: "Show Actors",
      type: "checkbox",
      defaultValue: false,
      width: "50%",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
  ],
  // Menu tab
  [
    {
      key: "variable",
      label: "Select a Variable",
      type: "variable",
      defaultValue: "LAST_VARIABLE",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["menu"],
        },
      ],
    },
    {
      key: "items",
      label: "Number of options (if menu)",
      type: "number",
      min: 2,
      max: MAX_OPTIONS,
      defaultValue: 2,
      conditions: [
        {
          key: "__scriptTabs",
          in: ["menu"],
        },
      ],
    },
    ...Array(MAX_OPTIONS)
      .fill()
      .reduce((arr, _, i) => {
        const idx = i + 1;
        arr.push(
          {
            type: "break",
            conditions: [
              {
                key: "items",
                gte: idx,
              },


            ],
          },
          {
            key: `__collapseCase$${idx}`,
            label: `Option ${idx}`,
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
            ],
            type: "collapsable",
            defaultValue: false,


          },
          {
            key: `option_${idx}_text`,
            type: "text",
            label: `Set variable to '${idx}' if`,
            placeholder: `Item ${idx}`,
            defaultValue: "",
            flexBasis: "100%",
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
              {
                key: `__collapseCase$${idx}`,
                ne: true,
              },
            ],
          },
          {
            key: `option${idx}_x`,
            label: "Text X pos (relative, in tiles)",
            type: "number",
            min: 0,
            max: 20,
            width: "50%",
            defaultValue: 0,
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
              {
                key: `__collapseCase$${idx}`,
                ne: true,
              },
            ],
          },
          {
            key: `option${idx}_y`,
            label: "Text Y pos (relative, in tiles)",
            type: "number",
            min: 0,
            max: 18,
            width: "50%",
            defaultValue: 0,
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
              {
                key: `__collapseCase$${idx}`,
                ne: true,
              },
            ],
          },
          {
            type: "break",
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
              {
                key: `__collapseCase$${idx}`,
                ne: true,
              },
            ],
          },
          {
            key: `option${idx}_l`,
            label: "On Left select option",
            type: "number",
            min: 0,
            max: MAX_OPTIONS,
            width: "50%",
            defaultValue: 0,
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
              {
                key: `__collapseCase$${idx}`,
                ne: true,
              },
            ],
          },
          {
            key: `option${idx}_r`,
            label: "On Right select option",
            type: "number",
            min: 0,
            max: MAX_OPTIONS,
            width: "50%",
            defaultValue: 0,
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
              {
                key: `__collapseCase$${idx}`,
                ne: true,
              },
            ],
          },
          {
            key: `option${idx}_u`,
            label: "On Up select option",
            type: "number",
            min: 0,
            max: MAX_OPTIONS,
            width: "50%",
            defaultValue: 0,
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
              {
                key: `__collapseCase$${idx}`,
                ne: true,
              },
            ],
          },
          {
            key: `option${idx}_d`,
            label: "On Down select option",
            type: "number",
            min: 0,
            max: MAX_OPTIONS,
            width: "50%",
            defaultValue: 0,
            conditions: [
              {
                key: "items",
                gte: idx,
              },
              {
                key: "__scriptTabs",
                in: ["menu"],
              },
              {
                key: `__collapseCase$${idx}`,
                ne: true,
              },
            ],
          },

        );
        return arr;
      }, []),
  ],
  // Dialogue tab
  [
    {
      key: "text",
      type: "textarea",
      placeholder: "Text...",
      multiple: true,
      defaultValue: "",
      flexBasis: "100%",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["dialogue"],
        },
      ],
    },
    {
      key: `textX`,
      label: "Text X pos (relative, in tiles)",
      type: "number",
      min: 0,
      max: 20,
      defaultValue: 1,
      width: "50%",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["dialogue"],
        },
      ],
    },
    {
      key: `textY`,
      label: "Text Y pos (relative, in tiles)",
      type: "number",
      min: 0,
      max: 18,
      defaultValue: 1,
      width: "50%",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["dialogue"],
        },
      ],
    },
    {
      key: `closeWhen`,
      label: "Close When...",
      type: "select",
      defaultValue: "key",
      options: [
        ["key", "Button Pressed"],
        ["text", "Text Finishes"],
        ["notModal", "Never (Non-Modal)"],
      ],
      conditions: [
        {
          key: "__scriptTabs",
          in: ["dialogue"],
        },
      ],
    },

    {
      key: "closeButton",
      type: "togglebuttons",
      options: [
        ["a", "A"],
        ["b", "B"],
        ["any", "Any"],
      ],
      allowNone: false,
      defaultValue: "a",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["dialogue"],
        },
        {
          key: "closeWhen",
          eq: "key",
        },
      ],
    },
  ],

);


const compile = (input, helpers) => {
  const {
    _addNL,
    appendRaw,
    _addComment,
    _boxX,
    _boxY,
    _callNative,
    _choice,
    _displayText,
    getVariableAlias,
    _loadStructuredText,
    _overlayClear,
    _overlayMoveTo,
    _overlayWait,
    _menuItem,
    _showActorsOnOverlay,
    _stackPop,
  } = helpers;

  // common

  // menu position in tiles
  const boxX = input.boxX || 0;
  const boxY = input.boxY || 0;

  const boxWidth = input.boxWidth || 1;
  const boxHeight = input.boxHeight || 1;

  const speedIn = `.OVERLAY_SPEED_INSTANT`;
  const speedOut = `.OVERLAY_SPEED_INSTANT`;
  const instantTextSpeedCode = `\\001\\1`;
  let str = "";

  //end common
  let debug = 0;
  
  // just somewhere to put a debug variable
  /*
  let debug = 0;
  appendRaw(`
    VM_SET_CONST VAR_TEMP_0, ${debug}
  `)
  */
  
  switch (input.menuordialogue) {
    case "menu":
      //build up the menu text
      Array(input.items)
        .fill()
        .map((_, i) => {
          const idx = i + 1;
          const itemText = input[`option_${idx}_text`];
          const fieldX = boxX + input[`option${idx}_x`] || 0;
          const fieldY = boxY + input[`option${idx}_y`] || 0;

          const x = decOct(2 + fieldX);
          const y = decOct(1 + fieldY);

          if (itemText) {
            str += `\\003\\${x}\\${y}${itemText}`;
          }
        });

      // menu dimensions in tiles
      const menuWidth = input.boxWidth || 1;
      const menuHeight = input.boxHeight || 1;

      const variableAlias = getVariableAlias(input.variable);

      _addComment("Display Menu VRAM Text");

      if (input.clearPrevious) {
        appendRaw(`; Copy the background tiles to the overlay
                      VM_PUSH_CONST 0
                      VM_PUSH_CONST 0
                      VM_GET_INT16  .ARG1, _scroll_x
                      VM_GET_INT16  .ARG0, _scroll_y      
        
                      VM_RPN
                        .R_INT8 0
                        .R_INT8 0
                        .R_INT8 20
                        .R_INT8 18
        
                        .R_INT8 0
                        .R_REF  .ARG1
                        .R_INT16 8
                        .R_OPERATOR  .DIV
                        .R_OPERATOR .MAX
        
                        .R_INT8 0
                        .R_REF  .ARG0
                        .R_INT16 8
                        .R_OPERATOR  .DIV
                        .R_OPERATOR .MAX
        
                        .R_STOP
        
                      VM_OVERLAY_SET_SUBMAP_EX  .ARG5
        
                      VM_POP  8
                      `);
      }

      //show actors on overlay
      appendRaw(`VM_SET_CONST_UINT8 _show_actors_on_overlay, ${input.showActors ? 1 : 0}`);

      _overlayMoveTo(0, 0, ".OVERLAY_SPEED_INSTANT");

      /// clear the menu area before displaying the menu
      _overlayClear(boxX, boxY, menuWidth, menuHeight, ".UI_COLOR_WHITE", input.showBorder);

      _overlayMoveTo(0, 0, speedIn);

      // display the text using VRAM using ui_alt_display_text 
      const warped_x = 1 % 32;
      const warped_y = 1 % 32;
      _loadStructuredText(`\\003\\${decOct(warped_x + 1)}\\${decOct(warped_y + 1)}${instantTextSpeedCode}${str}`);
      _callNative("ui_alt_display_text");

      //_overlayWait(true, [".UI_WAIT_WINDOW", ".UI_WAIT_TEXT"]);

      _choice(variableAlias, [".UI_MENU_CANCEL_B"], input.items);

      Array(input.items)
        .fill()
        .map((_, i) => {
          const clampItem = (i) => Math.min(i || 0, input.items);

          const idx = i + 1;
          const fieldX = boxX + input[`option${idx}_x`] || 0;
          const fieldY = boxY + input[`option${idx}_y`] || 0;
          const left = clampItem(input[`option${idx}_l`]);
          const right = clampItem(input[`option${idx}_r`]);
          const up = clampItem(input[`option${idx}_u`]);
          const down = clampItem(input[`option${idx}_d`]);

          _menuItem(fieldX, fieldY, left, right, up, down);

        });

      _overlayMoveTo(0, 0, speedOut);
      _overlayWait(true, [".UI_WAIT_WINDOW", ".UI_WAIT_TEXT"]);

      _overlayMoveTo(0, 18, ".OVERLAY_SPEED_INSTANT");

      //disable sprites on overlay when menu closes
      appendRaw(`VM_SET_CONST_UINT8 _show_actors_on_overlay, 0`);
    
      break;

    case "dialogue":
      appendRaw(`
        VM_SET_CONST VAR_TEMP_0, 75
      `)
      const textX = boxX + input.textX || 0;
      const textY = boxY + input.textY || 0;

      const isModal = input.closeWhen !== "notModal";

      const textInputs = Array.isArray(input.text) ? input.text : [input.text];

      const x = decOct(1 + textX);
      const y = decOct(1 + textY);
      const textPosSequence = `\\003\\${x}\\${y}`;
      _addComment("Display Dialogue VRAM Text");

      textInputs.forEach((text, textIndex) => {

        let endDelaySequence = "";  

        if (input.closeWhen === "text") {
          endDelaySequence = `\\001\\${decOct(8)}\\001\\${decOct(6)}`;
        } else if (textIndex !== textInputs.length - 1) {
          endDelaySequence = `\\001\\${decOct(1)}`;
        } else {
          endDelaySequence = `\\001\\${decOct(3)}`;
        }

        str = `${textPosSequence}${text}${endDelaySequence}`;
        _loadStructuredText(str);

        if (input.clearPrevious) {
          appendRaw(`; Copy the background tiles to the overlay
                    VM_PUSH_CONST 0
                    VM_PUSH_CONST 0
                    VM_GET_INT16  .ARG1, _scroll_x
                    VM_GET_INT16  .ARG0, _scroll_y      

                    VM_RPN
                      .R_INT8 0
                      .R_INT8 0
                      .R_INT8 20
                      .R_INT8 18

                      .R_INT8 0
                      .R_REF  .ARG1
                      .R_INT16 8
                      .R_OPERATOR  .DIV
                      .R_OPERATOR .MAX

                      .R_INT8 0
                      .R_REF  .ARG0
                      .R_INT16 8
                      .R_OPERATOR  .DIV
                      .R_OPERATOR .MAX

                      .R_STOP

                    VM_OVERLAY_SET_SUBMAP_EX  .ARG5

                    VM_POP  8
                    `);

        }

        appendRaw(`VM_SET_CONST_UINT8 _show_actors_on_overlay, ${input.showActors ? 1 : 0}`);

        _overlayClear(
          boxX,
          boxY,
          boxWidth,
          boxHeight,
          ".UI_COLOR_WHITE",
          input.showBorder
        );

        if (textIndex === 0) {
          _overlayMoveTo(0, 0, ".OVERLAY_SPEED_INSTANT");
        }

       // _displayText();
        //_callNative("ui_alt_display_text");
        _callNative("ui_alt_display_dialogue");

        const waitFlags = [".UI_WAIT_WINDOW", ".UI_WAIT_TEXT"];
        if (input.closeWhen === "key") {
          if (input.closeButton === "a") {
            waitFlags.push(".UI_WAIT_BTN_A");
          }
          if (input.closeButton === "b") {
            waitFlags.push(".UI_WAIT_BTN_B");
          }
          if (input.closeButton === "any") {
            waitFlags.push(".UI_WAIT_BTN_ANY");
          }
        }
        _overlayWait(isModal, waitFlags);

        if (textIndex === textInputs.length - 1) {
          if (isModal) {
            _overlayMoveTo(0, 18, ".OVERLAY_SPEED_INSTANT");
            _overlayWait(isModal, [".UI_WAIT_WINDOW", ".UI_WAIT_TEXT"]);
          }
        }

      });
      break;
  }
  _addNL();

};


module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
  waitUntilAfterInitFade: true,
};
