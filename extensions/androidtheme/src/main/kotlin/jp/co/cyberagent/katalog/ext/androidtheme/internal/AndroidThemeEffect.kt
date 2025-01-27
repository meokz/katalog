package jp.co.cyberagent.katalog.ext.androidtheme.internal

import android.app.Activity
import androidx.annotation.StyleRes
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext

@Composable
internal fun rememberThemeSelected(
    @StyleRes themeResId: Int
): Boolean {
    val activity = rememberActivity()
    var themeSelected by remember(activity) {
        mutableStateOf(false)
    }
    LaunchedEffect(activity) {
        if (activity != null) {
            activity.setTheme(themeResId)
            themeSelected = true
        }
    }
    return themeSelected
}

@Composable
private fun rememberActivity(): Activity? {
    val context = LocalContext.current
    return remember(context) { context.findActivity() }
}
