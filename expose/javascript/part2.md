1. It will return 3 because the last value of i is 3 and var i is shared across the whole function.

2. It will return 150 because the last value of discountedPrice is 150 from the calculation of the last value of prices mutiply with (1-discount). var discountedPrice is also shared across the whole function.

3. It will return 150 because the last finalPrice is calculated by the last value of discountedPrice which is 150 which in turns got multiply by 100 and divde by 100. FinalPrice is also a var which means it is shared across the whole function.

4. The function will return the list of 50, 100, 150 which is the calculated discounted prices of the original prices 100,200,300.

5. It will give an error at line 12 because i is not defined as the function-scope or var and it is defined in the block of for loop with let which is a block-scope.

6. The line 13 will gives an error because discountedPrice is not defined as the function-scope or var and it is defined in the block of for loop with let which is a block-scope.

7. The line 14 will return 150 which is the last finalPrice calculated by the last value of discountedPrice which is 150 which in turns got multiply by 100 and divde by 100. This does not give error because finalPrice is defined outside of the for loop block(still in the function block) and also accessed within the function block. Regardless of it being modified inside the for-loop block, as long as it is defined within the same scope as it is called, it does not give error.

8. The function will return the list of 50,100,150 which is the the calculated discounted prices of the original prices 100,200,300. This is because discount is defined within the same scope as it is called and modified in the for-loop block and got updated. For-loop block is the code block of the function where after the discount is defined and therefore can update discount in it. 

9. The line 11 will gives an error because i is not defined as the function-scope or var and it is defined in the block of for loop with let which is a block-scope and can only be accessed within the block that it is defined.

10. It will return 3 because length is defined as const within the function and we are accessing the length at the same block as it is defined.

11. The function will return the list of 50,100,150. Although discounted is defined as const, it still can updated with contents. This is because discounted is still referring to the same array when we push the new value in. This is like assigning a box with a label.You can't replace the box, but you can put stuff inside the box or take stuff out.

12. A. student.name
12. B. student['Grad Year']
12. C. student.greeting()
12. D. student['Favorite Teacher'].name
12. E. student.courseLoad[0]

13. A. '32'
13. B. 1
13. C. 3
13. D. '3null'
13. E. 4
13. F. 0
13. G. '3undefined'
13. H. NaN

14. A. true
14. B. false
14. C. true
14. D. false
14. E. false
14. F. true

15. == compares the value of the variables and === compares both the type and the value of the variables

17. When modifyArray([1, 2, 3], doSomething) is called, it applies the doSomething function (which doubles a number) to each element in the array. This results in a new array [2, 4, 6]. The callback doSomething is passed into modifyArray and invoked inside the loop for each element, showing how functions can be reused and passed as arguments to other functions.
    Inside the modifyArray function, a new array newArr is created. The for loop iterates over the input array:
    - i = 0: callback(array[0]) = doSomething(1) = 2 → newArr = [2]
    - i = 1: callback(array[1]) = doSomething(2) = 4 → newArr = [2, 4]
    - i = 2: callback(array[2]) = doSomething(3) = 6 → newArr = [2, 4, 6]
    The function returns newArr.

19. 1 4 3 2









