import Hogan from "hogan.js";
import { defaultView } from "../views";

export const init = {
  ctx: function initCtx(ctx, next) {
    ctx.data = {};
    ctx.partials = {};
    next();
  }
};

export const routes = {
  home: function(ctx, next) {
    ctx.data.title = "Winter";
    ctx.data.pageContent =
      "It snowed and snowed and snowed until we could barely see out the windows. So we climbed on the roof, strapped in to our floatiest boards and enjoyed the deep powder snow.";
    ctx.partials.content = defaultView;
    next();
  },
  page: function(ctx, next) {
    ctx.data.title = "Summer";
    ctx.data.pageContent =
      "As we pulled over the last sand dune, we were greeted by an emerald green ocean lined with evenly spaced corduroy all the way to the horizon. We could barely contain our excitement as we waxed up our surfboards and ran down to the beach.";
    ctx.partials.content = defaultView;
    next();
  }
};

export const render = {
  content: function(ctx, next) {
    const el = document.querySelector("#content");
    const template = Hogan.compile(ctx.partials.content);
    const content = template.render(ctx.data, ctx.partials);
    el.innerHTML = content;
  }
};
