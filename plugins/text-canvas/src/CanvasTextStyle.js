import assign from 'core-js/fn/object/assign';

/**
 * @class
 * @memberof text-canvas
 */
export default class CanvasTextStyle
{
    /**
     * @param {*} style - The style parameters. This object can contain any property of the
     *  CanvasTextStyle class to override the default.
     */
    constructor(style = {})
    {
        /**
         * Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign
         *
         * @member {string}
         * @default 'left'
         */
        this.align = 'left';

        /**
         * Indicates if lines can be wrapped within words, it needs wordWrap to be set to true.
         *
         * @member {boolean}
         * @default false
         */
        this.breakWords = false;

        /**
         * Blur radius of the drop shadow
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur
         *
         * @member {number}
         * @default 0
         */
        this.shadowBlur = 0;

        /**
         * Fill style of the drop shadow e.g 'red', '#00FF00'.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor
         *
         * @member {string}
         * @default '#000000'
         */
        this.shadowColor = '#000000';

        /**
         * X offset of the shadow of the drop shadow.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX
         *
         * @member {number}
         * @default 0
         */
        this.shadowOffsetX = 0;

        /**
         * Y offset of the shadow of the drop shadow.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY
         *
         * @member {number}
         * @default 0
         */
        this.shadowOffsetY = 0;

        /**
         * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'. Can be an array
         * to create a gradient eg ['#000000','#FFFFFF'].
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
         *
         * @member {string|string[]|CanvasGradient|CanvasPattern}
         * @default 'black'
         */
        this.fillStyle = 'black';

        /**
         * If fills styles are supplied, this can change the type/direction of the gradient.
         * True is vertical, false is horizontal.
         *
         * @member {boolean}
         * @default true
         */
        this.fillGradientVertical = true;

        /**
         * The font family to use.
         *
         * @member {string}
         * @default 'Arial'
         */
        this.fontFamily = 'Arial';

        /**
         * The font size (as a number it converts to px, but as a string, equivalents are
         * '26px','20pt','160%' or '1.6em')
         *
         * @member {number|string}
         * @default 26
         */
        this.fontSize = 26;

        /**
         * The font style ('normal', 'italic' or 'oblique')
         *
         * @member {string}
         * @default 'normal'
         */
        this.fontStyle = 'normal';

        /**
         * The font variant ('normal' or 'small-caps')
         *
         * @member {string}
         * @default 'normal'
         */
        this.fontVariant = 'normal';

        /**
         * The font weight ('normal', 'bold', 'bolder', 'lighter' and '100', '200',
         * '300', '400', '500', '600', '700', 800' or '900')
         *
         * @member {string}
         * @default 'normal'
         */
        this.fontWeight = 'normal';

        /**
         * The amount of spacing between letters.
         *
         * @member {number}
         * @default 0
         */
        this.letterSpacing = 0;

        /**
         * The line height, a number that represents the vertical space that a letter uses.
         *
         * @member {number}
         * @default 0
         */
        this.lineHeight = 0;

        /**
         * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
         * Valid values are 'bevel', 'round', or 'miter'.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
         *
         * @member {string}
         * @default 'miter'
         */
        this.lineJoin = 'miter';

        /**
         * The miter limit to use when using the 'miter' lineJoin mode. This can reduce or increase
         * the spikiness of rendered text.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit
         *
         * @member {number}
         * @default 10
         */
        this.miterLimit = 10;

        /**
         * Occasionally some fonts are cropped on top or bottom. Adding some padding will prevent this
         * from happening by adding padding to the top and bottom of text height.
         *
         * @member {number}
         * @default 0
         */
        this.padding = 0;

        /**
         * A canvas fillstyle that will be used on the text stroke e.g 'blue', '#FCFF00'.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle
         *
         * @member {string}
         * @default 'black'
         */
        this.stroke = 'black';

        /**
         * A number that represents the thickness of the stroke. Default is 0 (no stroke).
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth
         *
         * @member {number}
         * @default 0
         */
        this.strokeThickness = 0;

        /**
         * The baseline of the text that is rendered.
         * Valid values are "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom"
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline
         *
         * @member {string}
         * @default 'alphabetic'
         */
        this.textBaseline = 'alphabetic';

        /**
         * Indicates if word wrap should be used.
         *
         * @member {boolean}
         * @default false
         */
        this.wordWrap = false;

        /**
         * The width at which text will wrap, it needs wordWrap to be set to true.
         *
         * @member {number}
         * @default 100
         */
        this.wordWrapWidth = 100;

        // override properties based on params
        assign(this, style);
    }

    /**
     * Creates a new CanvasTextStyle with the same values as this one.
     *
     * @return {CanvasTextStyle} The new style
     */
    clone()
    {
        return new CanvasTextStyle(this);
    }

    /**
     * Builds a font style string for use with canvas, based on the properties of this style.
     *
     * @return {string} The font string.
     */
    getFontString()
    {
        const fontSizeString = (typeof this.fontSize === 'number') ? `${this.fontSize}px` : this.fontSize;

        return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${fontSizeString} ${this.fontFamily}`;
    }

    /**
     * Builds a fill style for use with canvas, based on the properties of this style.
     *
     * @param {number} numLines - The number of lines to split a vertical gradient over (if applicable).
     * @return {string|CanvasGradient|CanvasPattern} The fill style.
     */
    getFillStyle(numLines /* , resolution*/)
    {
        if (!Array.isArray(this.fillStyle))
        {
            return this.fillStyle;
        }

        // the gradient will be evenly spaced out according to how large the array is.
        // ['#FF0000', '#00FF00', '#0000FF'] would created stops at 0.25, 0.5 and 0.75

        const width = this.canvas.width;// / this.resolution;
        const height = this.canvas.height;// / this.resolution;

        // create the canvas gradient
        let gradient = null;

        if (this.fillGradientVertical)
        {
            // start the gradient at the top center of the canvas, and end at the bottom middle of the canvas
            gradient = this.context.createLinearGradient(width / 2, 0, width / 2, height);
        }
        else
        {
            gradient = this.context.createLinearGradient(0, height / 2, width, height / 2);
        }

        // create each of the color stops
        const numFills = this.fillStyle.length;
        const totalStops = (numFills + 1) * (this.fillGradientVertical ? numLines : 1);

        for (let i = 0; i < totalStops; ++i)
        {
            gradient.addColorStop((i + 1) / totalStops, this.fillStyle[i % numFills]);
        }

        return gradient;
    }
}
