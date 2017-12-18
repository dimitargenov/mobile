"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var platform_providers_1 = require("nativescript-angular/platform-providers");
var IfAndroidDirective = (function () {
    function IfAndroidDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
    IfAndroidDirective = __decorate([
        core_1.Directive({ selector: "[ifAndroid]" }),
        __param(0, core_1.Inject(platform_providers_1.DEVICE)),
        __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
    ], IfAndroidDirective);
    return IfAndroidDirective;
}());
exports.IfAndroidDirective = IfAndroidDirective;
var IfIosDirective = (function () {
    function IfIosDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
    IfIosDirective = __decorate([
        core_1.Directive({ selector: "[ifIos]" }),
        __param(0, core_1.Inject(platform_providers_1.DEVICE)),
        __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
    ], IfIosDirective);
    return IfIosDirective;
}());
exports.IfIosDirective = IfIosDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtcGxhdGZvcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWYtcGxhdGZvcm0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlGO0FBQ2pGLHFDQUFpRDtBQUNqRCw4RUFBaUU7QUFHakU7SUFDSSw0QkFBNkIsTUFBYyxFQUFFLFNBQTJCLEVBQUUsV0FBZ0M7UUFDdEcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyx3QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBTFEsa0JBQWtCO1FBRDlCLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUM7UUFFckIsV0FBQSxhQUFNLENBQUMsMkJBQU0sQ0FBQyxDQUFBO2lEQUE0Qix1QkFBZ0IsRUFBZSxrQkFBVztPQUR6RixrQkFBa0IsQ0FNOUI7SUFBRCx5QkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLGdEQUFrQjtBQVUvQjtJQUNJLHdCQUE2QixNQUFjLEVBQUUsU0FBMkIsRUFBRSxXQUFnQztRQUN0RyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLHdCQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUFMUSxjQUFjO1FBRDFCLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFFakIsV0FBQSxhQUFNLENBQUMsMkJBQU0sQ0FBQyxDQUFBO2lEQUE0Qix1QkFBZ0IsRUFBZSxrQkFBVztPQUR6RixjQUFjLENBTTFCO0lBQUQscUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGV2aWNlLCBwbGF0Zm9ybU5hbWVzIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBERVZJQ0UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0tcHJvdmlkZXJzXCI7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogXCJbaWZBbmRyb2lkXVwiIH0pXG5leHBvcnQgY2xhc3MgSWZBbmRyb2lkRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChERVZJQ0UpIGRldmljZTogRGV2aWNlLCBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+KSB7XG4gICAgICAgIGlmIChkZXZpY2Uub3MgPT09IHBsYXRmb3JtTmFtZXMuYW5kcm9pZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiBcIltpZklvc11cIiB9KVxuZXhwb3J0IGNsYXNzIElmSW9zRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChERVZJQ0UpIGRldmljZTogRGV2aWNlLCBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+KSB7XG4gICAgICAgIGlmIChkZXZpY2Uub3MgPT09IHBsYXRmb3JtTmFtZXMuaW9zKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=