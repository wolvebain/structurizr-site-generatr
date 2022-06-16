package nl.avisi.structurizr.site.generatr.site.pages.softwaresystem

import kotlinx.html.DIV
import nl.avisi.structurizr.site.generatr.site.context.AbstractSoftwareSystemPageContext

fun DIV.componentFragment(context: AbstractSoftwareSystemPageContext) {
    viewsFragment(context, "Component views", context.componentViews)
}
