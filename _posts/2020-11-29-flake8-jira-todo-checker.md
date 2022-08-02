---
layout: post
title:  "flake8-jira-todo-checker"
description: "Flake8 plugin to check that every TODO, FIXME, QQ etc comment has a valid JIRA ID next to it."
date:   2020-11-29
has_mathjax: False
---

Flake8 plugin to check that:

    Every TODO comment has a JIRA ID next to it.
    Every JIRA ID refers to a JIRA issue which is not closed.
    All "TODO" comments use the word "TODO" ("FIXME", "QQ", etc are not allowed).

In other words, this is valid as long as the JIRA issue ABC-123 is not closed:

```
def hacky_function():
    # TODO ABC-123 Stop reticulating splines
    ...
```

However, none of these comments would be valid:

```
def hacky_function():
    # TODO No JIRA issue is attached here
    # TODO ABC-9182 Not valid if this JIRA issue is resolved!
    # TODO FIXME You can't use this word to denote a TODO
    ...
```

Here it is [on PyPI](https://pypi.org/project/flake8-jira-todo-checker/) and the [source code is on GitHub](https://github.com/SimonStJG/flake8-jira-todo-checker/).
