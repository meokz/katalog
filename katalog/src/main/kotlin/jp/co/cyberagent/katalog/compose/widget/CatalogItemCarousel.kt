package jp.co.cyberagent.katalog.compose.widget

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Folder
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import jp.co.cyberagent.katalog.compose.res.defaultCornerRadius
import jp.co.cyberagent.katalog.compose.res.defaultPadding
import jp.co.cyberagent.katalog.domain.CatalogItem
import jp.co.cyberagent.katalog.domain.Extensions
import kotlin.math.ceil
import kotlin.math.floor
import kotlin.math.max

private val spacing = 10.dp
private val cellMinWidth = 200.dp

@Composable
internal fun CatalogItemCarousel(
    list: List<CatalogItem>,
    extensions: Extensions,
    onClick: (CatalogItem) -> Unit,
    modifier: Modifier = Modifier
) {
    if (list.isEmpty()) {
        Empty()
        return
    }
    BoxWithConstraints(
        modifier = modifier
    ) {
        val layoutWidth = maxWidth - defaultPadding * 2
        val contentNum = max(floor(layoutWidth / cellMinWidth), 2F) + 0.05F
        val spacingNum = (ceil(contentNum).toInt() - 1)
        val cellWidth = (layoutWidth - spacing * spacingNum) / contentNum
        LazyRow(
            contentPadding = PaddingValues(horizontal = defaultPadding)
        ) {
            itemsIndexed(list) { index, it ->
                val isLast = list.lastIndex == index
                val paddingEnd = if (isLast) 0.dp else spacing
                Cell(
                    modifier = Modifier
                        .padding(end = paddingEnd)
                        .width(cellWidth),
                    item = it,
                    onClick = { onClick(it) },
                    extensions = extensions
                )
            }
        }
    }
}

@Composable
private fun Cell(
    extensions: Extensions,
    item: CatalogItem,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .clip(RoundedCornerShape(defaultCornerRadius))
            .clickable(onClick = onClick)
    ) {
        Box(
            Modifier
                .fillMaxWidth()
                .aspectRatio(1F)
                .clip(RoundedCornerShape(defaultCornerRadius)),
        ) {
            when (item) {
                is CatalogItem.Component -> {
                    ComponentCell(
                        extensions = extensions,
                        component = item
                    )
                }
                is CatalogItem.Group -> {
                    GroupCell()
                }
            }
        }
        Text(
            text = item.name,
            modifier = Modifier
                .padding(top = 2.dp, bottom = 6.dp),
            fontSize = 12.sp,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
            color = MaterialTheme.colors.onBackground
        )
    }
}

@Composable
private fun GroupCell() {
    CatalogItemWrapper(
        modifier = Modifier.fillMaxSize()
    ) {
        BoxWithConstraints(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            val size = (maxWidth.value / 2.2).dp
            Icon(
                modifier = Modifier.size(size),
                imageVector = Icons.Filled.Folder,
                tint = MaterialTheme.colors.onBackground.copy(alpha = 0.7F),
                contentDescription = null
            )
        }
    }
}

@Composable
private fun ComponentCell(
    extensions: Extensions,
    component: CatalogItem.Component
) {
    CatalogItemWrapper(
        modifier = Modifier.fillMaxSize()
    ) {
        Preview(
            scale = 0.5F,
            definition = component.definition,
            extensions = extensions
        )
    }
}
