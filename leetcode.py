class Solution(object):
    """
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
    """
    def __init__(self, target, *args):
        self.nums = args[0]
        # 这里sorted如果传入args则new_nums得到的还是未排序的数组
        # self.new_nums = sorted(args)
        self.new_nums = sorted(list(set(*args)))
        self.target = target
        self.middle_l = len(self.new_nums)//2

    def binary_sort(self):
        if self.target > self.new_nums[self.middle_l]:
            self.for_range(self.middle_l, len(self.new_nums))
        else:
            self.for_range(0, self.middle_l+1)

    def for_range(self, start, end):
        print(self.new_nums)
        for i in range(start, end):
            for f in range(i+1, end):
                if self.new_nums[i] + self.new_nums[f] == self.target:
                    print(self.nums.index(self.new_nums[i]))
                    print(self.nums.index(self.new_nums[f]))

    def found_index(self):
        for i in range(len(self.new_nums)):
            for f in range(i+1, len(self.new_nums)):
                if self.new_nums[i] + self.new_nums[f] == self.target:
                    print(self.nums.index(self.new_nums[i]))
                    print(self.nums.index(self.new_nums[f]))
            #     break
            # break

    # def sum_two(self):
    #     new_nums = sorted(nums)
    #     for i in new_nums:
    #         print(new_nums.index(i))


if __name__ == '__main__':
    s = Solution(73,[1,33,4,89,4,53,9,20,7,11,19])
    # s.binary_sort()
    s.found_index()